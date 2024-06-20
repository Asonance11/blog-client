"use client";
import { login } from "@/actions/api";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be atleast 3 characters",
  }),
  password: z.string(),
});

const LoginPage = () => {
  const { userLogin } = useUserStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await login(values);
      if (user) {
        userLogin();
        router.push("/");
        toast.success("Logged in successfully");
      }
    } catch (error) {
      console.error("Error during login", error);
      toast.error("An unexpected error occurred");
    }
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <section className="flex flex-col max-w-xl p-8 mx-auto mt-8">
      <h1 className="self-start text-2xl font-semibold">Sign in</h1>
      <p className="self-start">Enter details to continue</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{isLoading ? <Loader /> : "Sign in"}</Button>
        </form>
      </Form>
    </section>
  );
};

export default LoginPage;
