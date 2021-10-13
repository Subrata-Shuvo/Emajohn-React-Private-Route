import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {user} = useAuth();
  const onSubmit = data => {
      console.log(data)
    };
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
    
      <input className='shipping-form' defaultValue={user.displayName} placeholder='your name' {...register("name")} />
      <input defaultValue={user.email} className='shipping-form' placeholder='your email' {...register("email", { required: true })} />
      {errors.email && <span className='error'>This field is required</span>}
      <input className='shipping-form' defaultValue="" placeholder='address' {...register("address")} />
      <input className='shipping-form' defaultValue="" placeholder='city' {...register("city")} />
      <input className='shipping-form' defaultValue="" placeholder='phone' {...register("phone")} />


      
      <input className='shipping-form' type="submit" />
    </form>
        </div>
    );
};

export default Shipping;