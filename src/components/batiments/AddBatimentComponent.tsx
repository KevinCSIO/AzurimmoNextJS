import Batiment from "@/models/Batiment";
import {Form} from "antd";
import {Input} from "react-daisyui";
import {useState} from "react";

export default function AddBatimentComponent({...props}:{batiment:Batiment}) {
    const [batiment, setBatiment] = useState<Batiment>(props.batiment);

    return (
        <>
            <Form>
                <Input placeholder={"Adresse"} value={batiment.adresse}/>
            </Form>

        </>
    )

}