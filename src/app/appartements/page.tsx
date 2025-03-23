import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import AppartementComponent from "@/components/appartements/AppartementComponent";


export default async function AppartementPage(){

    const appartements=await HttpService.get(API_URL.appartements);
    console.log('appartements', appartements);
    return (
        <>
            <AppartementComponent appartements={appartements} />
        </>
    );
}