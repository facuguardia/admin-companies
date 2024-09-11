"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { CompanyFormProps } from "./CompanyForm.types";
import { UploadButton } from "@/utils/uploadthing";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "./CompanyForm.form";
import { toast } from "@/hooks/use-toast";

export function CompanyForm(props: CompanyFormProps) {
  const { company } = props;
  const router = useRouter();

  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      country: company.country,
      website: company.website,
      phone: company.phone,
      cif: company.cif,
      profileImage: company.profileImage,
      description: company.description,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/company/${company.id}`, values)
      toast({
        title: "Company Updated!"
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
          {/* company name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* country */}
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
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  <SelectItem value="Argentina">Argentina</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Bolivia">Bolivia</SelectItem>
                      <SelectItem value="Brasil">Brasil</SelectItem>
                      <SelectItem value="Canada">Canadá</SelectItem>
                      <SelectItem value="Chile">Chile</SelectItem>
                      <SelectItem value="China">China</SelectItem>
                      <SelectItem value="Colombia">Colombia</SelectItem>
                      <SelectItem value="Corea del sur">
                        Corea del Sur
                      </SelectItem>
                      <SelectItem value="Ecuador">Ecuador</SelectItem>
                      <SelectItem value="Egipto">Egipto</SelectItem>
                      <SelectItem value="Espana">España</SelectItem>
                      <SelectItem value="Estados Unidos">
                        Estados Unidos
                      </SelectItem>
                      <SelectItem value="Francia">Francia</SelectItem>
                      <SelectItem value="Germany">Alemania</SelectItem>
                      <SelectItem value="Indonesia">Indonesia</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="Iran">Irán</SelectItem>
                      <SelectItem value="Italy">Italia</SelectItem>
                      <SelectItem value="Japan">Japón</SelectItem>
                      <SelectItem value="Kenya">Kenia</SelectItem>
                      <SelectItem value="Mexico">México</SelectItem>
                      <SelectItem value="Newzealand">Nueva Zelanda</SelectItem>
                      <SelectItem value="Nigeria">Nigeria</SelectItem>
                      <SelectItem value="Paraguay">Paraguay</SelectItem>
                      <SelectItem value="Peru">Perú</SelectItem>
                      <SelectItem value="Reino Unido">Reino Unido</SelectItem>
                      <SelectItem value="Russia">Rusia</SelectItem>
                      <SelectItem value="Southafrica">Sudáfrica</SelectItem>
                      <SelectItem value="Uruguay">Uruguay</SelectItem>
                      <SelectItem value="Venezuela">Venezuela</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* website */}
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="www.website.com" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(+34) 633 41 02 99"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CIF */}
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

          {/* profile image */}
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
                        });
                        setPhotoUploaded(true);
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          title: "Error uploading photo",
                        });
                      }}
                    />
                  )}
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Description..."
                    {...field}
                    value={form.getValues().description ?? ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Edit company</Button>
      </form>
    </Form>
  );
}
