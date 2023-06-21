import React from "react";

import {Control} from 'react-hook-form/dist/types'
import { Input } from "./input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { PasswordInput } from "./password-input";
interface Props {
  name: string;
  placeholder: string;
  control: any
  type?: string
//   control: Control<
//     {
//       username: string;
//       email: string;
//       password: string;
//     },
//     any
//   >;
}
function InputForm({ type , name, placeholder, control }: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
           
          { type === 'pass' ?
          <PasswordInput dir='ltr' placeholder="*********" {...field} />
          
        :
        <Input dir='ltr' placeholder={placeholder} {...field} /> 
        }
          </FormControl>
          {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputForm;
