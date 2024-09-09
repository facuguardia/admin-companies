"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormCreateCustomerProps } from "./FormCreateCustomer.types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { useToast } from "@/hooks/use-toast";
import axios from 'axios'
import { useRouter } from "next/navigation";



const formSchema = z.object({
  name: z.string(),
  country: z.string().min(2),
  website: z.string().min(2),
  phone: z.string().min(6),
  cif: z.string().min(6),
  profileImage: z.string(),
});
export function FormCreateCustomer(props: FormCreateCustomerProps) {
  const { setOpenModal } = props;

  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter()

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileImage: "",
    },
  });

  const { isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      axios.post("/api/company", values)
      toast({
        title: "Company created"
      })
      router.refresh()
      setOpenModal(false)
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive"
      })
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-3">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company name..."
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="spain">España</SelectItem>
                      <SelectItem value="usa">Estados Unidos</SelectItem>
                      <SelectItem value="mexico">México</SelectItem>
                      <SelectItem value="argentina">Argentina</SelectItem>
                      <SelectItem value="brasil">Brasil</SelectItem>
                      <SelectItem value="chile">Chile</SelectItem>
                      <SelectItem value="colombia">Colombia</SelectItem>
                      <SelectItem value="peru">Perú</SelectItem>
                      <SelectItem value="venezuela">Venezuela</SelectItem>
                      <SelectItem value="ecuador">Ecuador</SelectItem>
                      <SelectItem value="bolivia">Bolivia</SelectItem>
                      <SelectItem value="paraguay">Paraguay</SelectItem>
                      <SelectItem value="uruguay">Uruguay</SelectItem>
                      <SelectItem value="canada">Canadá</SelectItem>
                      <SelectItem value="france">Francia</SelectItem>
                      <SelectItem value="germany">Alemania</SelectItem>
                      <SelectItem value="italy">Italia</SelectItem>
                      <SelectItem value="unitedkingdom">Reino Unido</SelectItem>
                      <SelectItem value="russia">Rusia</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                      <SelectItem value="japan">Japón</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="newzealand">Nueva Zelanda</SelectItem>
                      <SelectItem value="southafrica">Sudáfrica</SelectItem>
                      <SelectItem value="egypt">Egipto</SelectItem>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="kenya">Kenia</SelectItem>
                      <SelectItem value="southkorea">Corea del Sur</SelectItem>
                      <SelectItem value="indonesia">Indonesia</SelectItem>
                      <SelectItem value="iran">Irán</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Website */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="www.website.com"
                      type="url"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+34 633 41 02 99"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Cif */}
            <FormField
              control={form.control}
              name="cif"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CIF</FormLabel>
                  <FormControl>
                    <Input placeholder="B-123789" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Profile Image */}
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    {photoUploaded ? (
                      <p className="text-sm">Image Uploaded !</p>
                    ) : (
                      <UploadButton
                        className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-4"
                        {...field}
                        endpoint="profileImage"
                        onClientUploadComplete={(res) => {
                          form.setValue("profileImage", res?.[0].url);
                          toast({
                            title: "Photo uploaded!",
                          })
                          setPhotoUploaded(true);
                        }}
                        onUploadError={(error: Error) => {
                          toast({
                          title: "Error uploading photo",
                        })
                        }}
                      />
                    )}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={!isValid}>Submit</Button>
        </form>
      </Form>
    </div>
  );
}
89;
