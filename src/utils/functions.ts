import { Session } from "next-auth";
// import { array } from "zod";
import { cloudinaryConfig } from "@/utils/configs/storage";

type AnyFunction = (...args: any[]) => any;

type Options = {
  tags?: string[];
  folder: string;
};

type UploadPromise = {
  message: string;
  data: string;
};

export const nullIfError =
  <Func extends AnyFunction>(func: Func) =>
  async (...args: Parameters<Func>) => {
    try {
      return await func(...args);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

export const isNoAuth = (auth: Session | null, isAdmin: boolean = false) => {
  if (isAdmin) {
    if (auth) {
      return auth.user?.role !== "admin";
    }
    return true;
  } else if (auth) {
    return false;
  } else {
    return true;
  }
};

export const fileUploader = async (image: File, { tags, folder }: Options) => {
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  return new Promise<UploadPromise>((resolve, reject) => {
    cloudinaryConfig.uploader
      .upload_stream(
        {
          tags,
          resource_type: "auto", // image or video
          folder,
        },
        function (error, result) {
          if (error) {
            reject({
              message: error.message,
              data: null,
            });
            return;
          }
          resolve({
            message: "Success",
            data: result?.secure_url ?? "",
          });
        }
      )
      .end(buffer);
  });
};
