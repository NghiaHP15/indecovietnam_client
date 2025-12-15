import APIClient from "@/lib/APIClient";

export enum RoomCategoryApi {
  getAllRoom = "/room-category",
}

const getAllRooms = async () => await APIClient.get({ url: RoomCategoryApi.getAllRoom });

export { 
    getAllRooms,
}