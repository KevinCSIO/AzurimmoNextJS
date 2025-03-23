import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import ContratComponent from "@/components/contrats/ContratComponent";


export default async function ContratPage(){

    const contrats=await HttpService.get(API_URL.contrats);
    console.log('contrats', contrats);
    return (
        <>
            <ContratComponent contrats={contrats} />
        </>
    );
}