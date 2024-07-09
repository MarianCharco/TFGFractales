import emailjs from "@emailjs/browser";

import { BlockUI } from "primereact/blockui";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../consts";
interface ContactFormFields {
	name: string;
	email: string;
	subject: string;
	message: string;
	[key: string]: unknown;
}
type NotificationType = "error" | "success" | "info" | "warn" | undefined;

const ContactForm = () => {
	const ToastRef = useRef<Toast>(null);
	const Regex_Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const fieldNames: ContactFormFields = {
		name: "name",
		email: "email",
		subject: "subject",
		message: "message",
	};
	const DEFAULT_FIELDVALUE = {
		name: "",
		email: "",
		subject: "",
		message: "",
	}
	const [fieldsValue, setFieldsValue] = useState<ContactFormFields>(DEFAULT_FIELDVALUE);
	const [isLoading, setIsloading] = useState<boolean>(false);

	useEffect(() => {
		emailjs.init({
			publicKey: EMAILJS_PUBLIC_KEY,
		});
	}, []);

	function handleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { value, name } = e.target;
		if (validateData(name, value)) {
			setFieldsValue((prevFields) => ({
				...prevFields,
				[name]: value,
			}));
		}
	}

	function showToast(message:string,severity:NotificationType){
		
    ToastRef.current?.show({ severity: severity, summary: message, detail: message,life: 3000});
    
	}

	function validateData(field: string, value: string) {
		switch (field) {
			case fieldNames.name:
				if (value.length > 50) return false;
				return true;

			case fieldNames.email:
				if (value.length > 50) return false;
				return true;

			case fieldNames.subject:
				if (value.length > 100) return false;
				return true;
			case fieldNames.message:
				if (value.length > 3000) return false;
				return true;
			default:
				return false;
		}
	}

	async function handlerSubmitForm(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (validateAllData()) {
			setIsloading(true);
			try {
				await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, fieldsValue);
				showToast("Mensaje enviado con exito!","success");
				setFieldsValue(DEFAULT_FIELDVALUE);
			} catch (error) {
				showToast("Ha ocurrido un error al enviar el mensaje!","error")
				console.log(error);
			} finally {
				setIsloading(false);
			}
		}
	}

	function validateAllData() {
		let valid: boolean = true;
		if (
			!validateData(fieldNames.name, fieldsValue.name) ||
			fieldsValue.name?.trim() === ""
		)
			valid = false;
		if (!Regex_Email.test(fieldsValue.email) || fieldsValue.email === "")
			valid = false;
		if (
			!validateData(fieldNames.subject, fieldsValue.subject) ||
			fieldsValue.subject?.trim() === ""
		)
			valid = false;
		if (
			!validateData(fieldNames.message, fieldsValue.message) ||
			fieldsValue.message?.trim() === ""
		)
			valid = false;
		return valid;
	}

	return (
		<BlockUI blocked={isLoading}>
			<form className="flex flex-col gap-3">
				<section className="flex flex-col gap-2">
					<Toast ref={ToastRef}/>
					<InputText
						placeholder="Nombre"
						name={fieldNames.name}
						onChange={handleInputChange}
						value={fieldsValue.name}
					/>
						<InputText
							placeholder="Email"
							name={fieldNames.email}
							value={fieldsValue.email}
							onChange={handleInputChange}
						/>
				</section>
				<section className="flex flex-col gap-2">
					<InputText
						placeholder="Asunto"
						name={fieldNames.subject}
						value={fieldsValue.subject}
						onChange={handleInputChange}
					/>
					<InputTextarea
						placeholder="Mensaje"
						rows={5}
						cols={30}
						value={fieldsValue.message}
						autoResize
						name={fieldNames.message}
						onChange={handleInputChange}
					/>
				</section>
				<Button
					className="w-fit"
					onClick={handlerSubmitForm}
					disabled={!validateAllData()}
				>
					Enviar
				</Button>
			</form>
		</BlockUI>
	);
};

export default ContactForm;
