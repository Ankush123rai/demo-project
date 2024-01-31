import React from "react";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { color } from "framer-motion";

export default function Register() {
  //   const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-1 border-orange-300 m-10 bg-white w-[60vw] px-[5rem] py-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="text-black text-5xl font-medium font-['Jura'] uppercase">
              welcome
            </div>
            <div className="text-black font-normal font-['Jura'] uppercase">
              to heavenly matrimony
            </div>
          </div>
          <div>
            <img
              className="w-[250px] h-[250px] rounded-full"
              src="https://th.bing.com/th/id/OIP.w6Cs6qz234c71XloeqKdwgHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>

        <section>
          <form className="grid grid-cols-2 gap-4 mt-10">
            <Select
              variant="underlined"
              placeholder="Profile For"
              className="max-w-xs"
            >
              <SelectItem value="dog" key={""}>
                Sakil Ahmeh
              </SelectItem>
            </Select>

            <Input type="email" variant="underlined" label="Email" />
            <Input type="text" variant="underlined" label="Name" />
            <Input type="text" variant="underlined" label="Mobile" />
            <Select
              variant="underlined"
              placeholder="Gender"
              className="max-w-xs"
            >
                <SelectItem value="Male" key={""}>Male</SelectItem>
                <SelectItem value="Female" key={""}> Female</SelectItem>
            </Select>   
            <Input
              type="password"
              variant="underlined"
              label="Create Password"
            />
            <Input
             type="date"
                variant="underlined"
                label="Date of Birth"
                />
            <Input type="text" variant="underlined" label="Address" />
            <Select
                variant="underlined"
                placeholder="Religion"
                className="max-w-xs"
                >
                <SelectItem value="Islam" key={""}>Islam</SelectItem>
                <SelectItem value="Hindu" key={""}> Hindu</SelectItem>
                <SelectItem value="Christian" key={""}> Christian</SelectItem>
                <SelectItem value="Buddhist" key={""}> Buddhist</SelectItem>
            </Select>
            <Input type="text" variant="underlined" label="District" />
            <Select
                variant="underlined"
                placeholder="Demonination"
                className="max-w-xs"
                >
                <SelectItem value="Islam" key={""}>Islam</SelectItem>
                <SelectItem value="Hindu" key={""}> Hindu</SelectItem>
              </Select>
            <Input type="text" variant="underlined" label="Country" />  

            <div className="flex items-center gap-3 mt-5">
                <input type="checkbox"/>
                <p className="text-black text-xl font-normal font-['Jura'] capitalize">i agree to privacy and t&c</p>
            </div>
            
            <Button className="mt-5 bg-orange-400 p-6 w-[236px] h-[63px]">
                Save
            </Button>
            
          </form>
        </section>
      </div>
    </div>
  );
}
