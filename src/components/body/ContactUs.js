import FormTextArea from "./FormTextArea";
import FormTag from "./FormTag";
import LinkBtn from "./LinkBtn";

function ContactUs() {
	return (
		<div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">A Call Back</h1>
               <form action="/action_page.php">
                  <FormTag placeholder={"name"} name={"name"}/>
				  <FormTag placeholder={"Email"} name={"email"}/>
				  <FormTag placeholder={"Phone Number"} name={"phone_no"}/>
                  <FormTextArea placeholde={"Massage"} idName={"message"} name={"message"} /> 
               </form>
               <LinkBtn class={"send_btn"} link={"#"} text={"SEND"}/>
            </div>
         </div>
      </div>
	)
}

export default ContactUs;