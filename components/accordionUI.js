import React from 'react'
import { HiArrowCircleDown, HiX } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect, useState, useContext } from 'react'

import { PortableText } from '@portabletext/react'
import colorContext from './../contexts/colorContext'

import { myPortableTextComponents } from './portableTextComponents'

const AccordionUI = ({ title, children, Id, Index, setIndex, inpar }) => {
  const { color, setColor } = useContext(colorContext)

  const handleSetIndex = (Id) => {
    Index === Id && setIndex(false)
    Index !== Id && setIndex(Id)
  }

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        style={{ color: `${color}` }}
        className="group mx-auto mt-2 flex h-16 w-full max-w-5xl cursor-pointer  items-center justify-between rounded-md border bg-white p-2 hover:bg-gray-200 hover:shadow-lg focus:bg-gray-400 "
      >
        <div className="group flex cursor-pointer">
          <div
            style={{ color: `${color}` }}
            className="pl-10 text-xl font-semibold text-rose-600 group-hover:text-white sm:text-2xl"
          >
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <IoIosArrowDown
              style={{ color: `${color}` }}
              className="h-6 w-6 text-rose-600 group-hover:text-white"
            />
          ) : (
            <HiX
              style={{ color: `${color}` }}
              className="h-6 w-6 text-rose-600 group-hover:text-white"
            />
          )}
        </div>
      </div>

      {Index === Id && (
        <div
          style={{ color: `${color}` }}
          className="mb-2 h-auto  w-full max-w-5xl rounded-md border-l-2 border-emerald-300  bg-gray-50 p-2 font-semibold text-rose-500 sm:p-4 "
        >
          <div
            className={`my-4 flex h-full w-full flex-wrap ${
              inpar ? 'flex-wrap' : ' flex-row-reverse'
            }`}
          >
            {/* <h1 className="m-2 my-4 text-2xl">{children.title.es}</h1> */}
            {/* <hr /> */}
            <div className="flex h-full w-full items-center justify-center self-start sm:w-1/2">
              <img src={children.image.asset.url} alt="" className="p-2" />
            </div>
            <div className="w-full p-4 sm:w-1/2">
              <PortableText
                value={children.info.es}
                components={myPortableTextComponents}
              />
              {/* {value.files !== null && (
                      <div className="my-4">
                        <hr />
                        <h1 className="my-4 ">Archivos:</h1>
                        {value.files.map((value: any, index: any) => {
                          return (
                            <button className="cursor-pointer  border-2 border-emerald-700 bg-emerald-200 p-4">
                              <a href={value.url} target={'_blank'}>
                                Archivo {index + 1}
                              </a>
                            </button>
                          )
                        })}
                      </div>
                    )} */}
              <br />
              <hr />
              <h1 className="my-4">Link al formulario:</h1>
              <a href={children.link_f} target={'_blank'}>
                <button className="cursor-pointer  border-2 border-emerald-700 bg-emerald-200 p-4">
                  Formulario
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AccordionUI
