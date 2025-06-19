import React from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const FormFieldInput:React.FC<Props> = ({ control, name, label, type, placeholder }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldInput