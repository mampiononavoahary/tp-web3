'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import z from "zod";


const User = z
 .object({
    name: z.string().min(5),
    email: z.string().email(),
    numero: z.number().positive(),
    message: z.string().min(5),
 })
 .required();

type UserFormData = z.infer<typeof User>;

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UserFormData>()
      const onSubmit: SubmitHandler<UserFormData> = (data) => console.log(data)
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label>Name</label>
          <input {...register("name", { required: true })} />
    
          <label>Email</label>
          <input {...register("email", { required: true })} />

          <label>Numero</label>
          <input type="number" {...register("numero", { required: true })} />

          <label>Message</label>
          <input {...register("message", { required: true })} />
  
          {errors.email && <span>This field is required</span>}
    
          <input type="submit" />
        </form>
      )
}
export default Contact