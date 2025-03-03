import Link from "next/link";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import Batiment from "@/models/Batiment";
import BatimentComponent from "@/components/BatimentComponent";

export default async function BatimentPage(){

    const batiments=await HttpService.get(API_URL.batiments);
console.log('batiments', batiments);
    return (
        <>
            <BatimentComponent batiments={batiments} />
        </>
    );
}