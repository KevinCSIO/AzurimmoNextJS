import Batiment from "@/models/Batiment";
import {Divider, Form} from "antd";
import {Button, Input} from "react-daisyui";
import {useState} from "react";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";

export default function AddOrUpdateBatimentComponent({...props}:{
    batiment:Batiment,
    onSubmit:(batiment:Batiment)=>void,
    onClose:(show:boolean)=>void
}) {
    const [batiment, setBatiment] = useState<Batiment>(props.batiment);

    return (
        <>
            <Form>
                <Input className="input" placeholder={"Adresse"}
                       value={batiment.adresse}
                       onChange={(e)=>{
                           setBatiment({...batiment,adresse:e.target.value});
                       }}
                />
                <Input className="input" placeholder={"Ville"}
                       value={batiment.ville}
                       onChange={(e)=>{
                           setBatiment({...batiment,ville:e.target.value});
                       }}
                />
                <Divider/>

                <div className="flex justify-between">
                    <Button onClick={()=>{
                        props.onSubmit(batiment);
                    }}>Valider</Button>

                    <Button onClick={(e)=>{
                        e.preventDefault();
                        props.onClose(false);
                    }}>Annuler</Button>
                </div>
            </Form>
        </>
    );
}