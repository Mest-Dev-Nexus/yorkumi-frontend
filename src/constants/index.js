import { BookIcon, FileIcon, Home, MessageCircleIcon, Pencil, User } from "lucide-react";

export default{
    NAVLINKS:[
        {
            name: "Overview",
            path: "/dashboard",
            icon: Home
        },
        
        
       
        {
            name: "Vendor Ads",
            path: "/dashboard/ads",
            icon: FileIcon,
        },
        {
            name: "Manage Orders",
            path: "/dashboard/orders",
            icon: BookIcon,
        },
        // {
        //     name: "Update Product",
        //     path: "/dashboard/update/:id",
        //     icon: Pencil,
        // },
        {
            name: "Message",
            path: "/dashboard/message",
            icon: MessageCircleIcon,
        },
        {
            name: "Profile",
            path: "/dashboard/operator-profile",
            icon: User,
        },
    ]
}