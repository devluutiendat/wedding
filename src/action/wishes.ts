'use server'
import { pdfConvert } from "@/lib/pdf-convert";
import { sendMail } from "@/lib/send-email";
import { wish } from "@/types/wish-type";
import axios from "axios";
import { revalidateTag } from 'next/cache';

export async function addWish(formdata:wish) {
  try {
    
    await axios.post(
      "https://script.google.com/macros/s/AKfycbxVxHwlumhB_fg84dnjJQ-6Qez3yD-DtzOdGSTXEPEaYRgRxvRFItMD1Mlpkq9UmtGndQ/exec",
      {
        name: formdata.name,
        content: formdata.content,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
     revalidateTag('wishList'); 
      const data = await pdfConvert();
      sendMail({ sendTo: formdata.email!, invitation: data });

    } catch (error) {
      
    }
}