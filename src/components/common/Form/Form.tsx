import { useForm, FormProvider } from 'react-hook-form';
import React, { FC, ReactNode, useEffect } from 'react';

interface FormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (value: any) => void;
  children: ReactNode;
  className?: string;
  reset: boolean;
}
export const Form: FC<FormProps> = ({ onSubmit, children, className,reset }) => {
  const methods = useForm();
  useEffect(()=>{
  if(reset) methods.reset()
  },[methods, reset]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};
