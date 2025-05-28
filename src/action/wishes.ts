"use server"
import { pdfConvert } from "@/lib/pdf-convert"
import { sendMail } from "@/lib/send-email"

export const addWish = async (
    //name: string, message: string , 
    sendTo: string, data: ArrayBuffer) => {
        sendMail({ sendTo, invitation:data });
        
}
