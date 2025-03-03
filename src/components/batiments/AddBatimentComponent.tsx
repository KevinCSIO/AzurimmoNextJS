import Batiment from "@/models/Batiment";
import {Divider, Form} from "antd";
import {Button, Input} from "react-daisyui";
import {useState} from "react";

export default function AddBatimentComponent({...props}:{batiment:Batiment}) {
    const [batiment, setBatiment] = useState<Batiment>(props.batiment);

    return (
        <>
            <Form>
                <Input placeholder={"Adresse"} value={batiment.adresse}/>
            <Divider/>
                <div className="flex justify-between">
                    <Button onClick={()=>{

                    }} value={"Annuler"}/>
                </div>
            </Form>

        </>
    )

}