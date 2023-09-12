"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, FieldError } from 'react-hook-form'
import { IVcard } from '@/lib/types/interfaces'


const getCardData = async (cardId: string): Promise<IVcard> => {
      const data = await fetch(`http://localhost:3000/api/card/${cardId}`)
      const cardData = await data.json()
      return cardData[0]
    }

const CardDetail = ({ userId, cardId } : { userId: string, cardId?: string}) => {
  const router = useRouter()

  const { 
    register, 
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<IVcard>()

  useEffect( () => {
      const initCardData = async () => {
        const data: IVcard = await getCardData(cardId || '')
        reset(data)
      }
    
      cardId && initCardData()
    }, [])

  const onSubmit: SubmitHandler<IVcard> =  (data) => {
    if (cardId) {
        fetch(`/api/card/${cardId}`, {
            body: JSON.stringify(data),
            method: "PUT", 
            headers: {
                  "content-type": "application/json"
        }
        }).then( async (res) => {
            
                if (res.status !== 200) {
                    alert("Error")
                } else {
                    router.push(`/user/${userId}/cardDesign/${cardId}`)
                }
        })
    } else {
        // save new data
        fetch(`/api/card`, {
            body: JSON.stringify(data),
            method: "POST", 
            headers: {
                  "content-type": "application/json"
        }
        }).then( async (res) => {
                  res
                if (res.status !== 200) {
                    alert("Error")
                } else {
                    const json = await res.json()     
                    console.log("json", json.data)
                    router.push(`/user/${json.data.userId}/cardDesign/${json.data.id}`)
                }
        })
    }   

     
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full px-16 md:px-16 lg:px-48 py-2 gap-4 mx-auto">
      
      <input type="text"
            defaultValue={`${userId}`}
            {...register("userId", 
            { required: true })} 
            className="hidden bg-gray-100 border-gray-700 border-2 rounded leading-tight py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
            />

      <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                        <div className="">Name</div>
                        <input placeholder="John"
                              type="text"
                             
                              autoComplete='off'
                              {...register("firstName", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.firstName && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col">
                        <div className="">Last Name</div>
                        <input placeholder="Brown"
                              type="text"
                            
                              autoComplete='off'
                              {...register("lastName", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.lastName && <span>This field is required</span>}
                  </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                        <div className="">Company</div>
                        <input placeholder="Brilliant Engineering"
                              type="text"
                              
                              autoComplete='off'
                              {...register("company", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.company && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col">
                        <div className="">Job Title</div>
                        <input placeholder="Manager"
                              type="text"
                            
                              autoComplete='off'
                              {...register("jobTitle", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.jobTitle && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col">
                        <div className="">Job Role</div>
                        <input placeholder="Human Resources"
                              type="text"
                             
                              autoComplete='off'
                              {...register("jobRole", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.jobRole && <span>This field is required</span>}
                  </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                        <div className="">Email</div>
                        <input placeholder="john.brown@brilliant.com"
                              type="text"
                              
                              autoComplete='off'
                              {...register("email", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.email && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col">
                        <div className="">Phone No</div>
                        <input placeholder="04-8981928"
                              type="text"
                             
                              autoComplete='off'
                              {...register("phoneNo", { required: false })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.phoneNo && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col">
                        <div className="">Mobile No</div>
                        <input placeholder="8279829"
                              type="text"
                             
                              autoComplete='off'
                              {...register("hpNo", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.hpNo && <span>This field is required</span>}
                  </div>
            </div>

            <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-3 flex flex-col">
                              <div className="">Street</div>
                              <input placeholder="No. 21 Jump Street"
                              type="text"
                             
                              autoComplete='off'
                              {...register("street", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.street && <span>This field is required</span>}
                        </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                              <div className="">City</div>
                              <input placeholder="Seattle"
                              type="text"
                              
                              autoComplete='off'
                              {...register("city", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.city && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                              <div className="">State/Region</div>
                              <input placeholder="WA"
                              type="text"
                              
                              autoComplete='off'
                              {...register("state", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.state && <span>This field is required</span>}
                        </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                              <div className="">Country</div>
                              <input placeholder="USA"
                              type="text"
                              
                              autoComplete='off'
                              {...register("country", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.country && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                              <div className="">Postal Code</div>
                              <input placeholder="91872"
                              type="text"
                             
                              autoComplete='off'
                              {...register("postCode", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.postCode && <span>This field is required</span>}
                        </div>
                  </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-2 flex flex-col">
                        <div>Website</div>
                        <input placeholder="www.brilliant-engineering.com"
                              type="text"
                              
                              autoComplete='off'
                              {...register("url", { required: true })}   
                              className="flex-grow bg-gray-100 px-2 py-1 border-2 rounded-lg"
                              />
                        {errors.url && <span>This field is required</span>} 
                  </div>
            </div>

      </div>
      
      <div className="flex justify-end">
            { cardId ? (<button type="submit" 
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">
                            Update Details
                        </button>) : 
                        (<button type="submit" 
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">
                            Save Details
                        </button>)
            }
      </div>
    </form>
  )
}

export default CardDetail