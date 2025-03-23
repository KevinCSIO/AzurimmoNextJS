import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import LocataireComponent from "@/components/locataires/LocataireComponent";

export default async function LocatairePage(){

    const locataires=await HttpService.get(API_URL.locataires);
    console.log('locataires', locataires);
    return (
        <>
            <LocataireComponent locataires={locataires} />
        </>
    );
}