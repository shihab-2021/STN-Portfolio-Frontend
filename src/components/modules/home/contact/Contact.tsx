"use client";
import Loading from "@/components/shared/Loading";
import SectionTitle from "@/components/shared/SectionTitle";
import { useCreateMessageMutation } from "@/redux/features/message/messageApi";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function Contact() {
  const { handleSubmit, register, reset } = useForm();
  const [createMessage, { isLoading }] = useCreateMessageMutation();

  const submitHandler: SubmitHandler<FieldValues> = async (info) => {
    const time = new Date();
    const date = new Date().toLocaleDateString();
    const currentTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const messageInfo = {
      ...info,
      date: date,
      time: currentTime,
    };
    try {
      const res = await createMessage(messageInfo).unwrap();

      if (!res.success) {
        toast.error(res?.data?.err);
      } else {
        reset();
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <div id="contact" className="py-14">
      <SectionTitle title="Contact" />
      <div className="px-2">
        <div className="mt-4 bg-[url('/assets/blur_bg.png')] font-sansita text-[var(--primaryColor1)] \shadow-lg rounded-md font-medium">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="p-2 md:p-4 border-gray-800 rounded-md"
          >
            <div className="flex flex-col pb-2">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                placeholder="Email"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <input
                className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                type="text"
                placeholder="Name"
                id="name"
                {...register("name")}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="subject" className="font-bold">
                Subject
              </label>
              <input
                className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                type="text"
                id="subject"
                placeholder="Subject"
                {...register("subject")}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="message" className="font-bold">
                Message
              </label>
              <textarea
                className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                // type="text"
                id="message"
                placeholder="Message"
                rows={7}
                {...register("message")}
              />
            </div>

            <div className="py-2">
              <button
                disabled={isLoading}
                type="submit"
                className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700"
              >
                {isLoading ? <Loading /> : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
