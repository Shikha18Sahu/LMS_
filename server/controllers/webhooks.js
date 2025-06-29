import {Webhook} from "svix";
import User from "../models/User.js";

// API controller Function to Manage Clerk user with database

export const clerkWebhook = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
       "svix-id":  req.headers["svix-id"],
       "svix-timestamp": req.headers["svix-timestamp"], 
       "svix-signature": req.headers["svix-signature"]
    });

    const {data, type} =req.body

    switch (type){
      case 'user.created': {
        const userData = {
          _id: data.id,
          name: data.first_name + " " + data.last_name,
          email: data.email_address[0].email_address,
          imageUrl: data.image_url,
        }
        await User.create(userData);
        res.json({})
        break;
      }

      case 'user.updted':{
        const userData = {
          name: data.first_name + " " + data.last_name,
          email: data.email_address[0].email_address,
          imageUrl: data.image_url,
        }
        await User.findByIdAndUpdate(data.id, userData );
        res.json({})
        break;
      }

      case 'user.deleted': {
        await User.findByIdAndDelete(data.id);
        res.json({})
        break;
      }
    }

  } catch (error) {
     res.json({success: false, message: error.message});
  }
}