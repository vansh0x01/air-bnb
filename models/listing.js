const mongoose=require("mongoose");
let Schema=mongoose.Schema;

const listingSchema= new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
        type: String,
        default: "listingimage",
        },
        url: {
        type: String,
        default:
            "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0",
        set: (v) =>
            v === ""
            ? "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0"
            : v,
        },
    },
    price: Number,
    location: String,
    country: String,
})

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;