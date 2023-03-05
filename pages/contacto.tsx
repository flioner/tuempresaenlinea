import Layout from "../components/layout/layout";
import Head from "next/head";
import s from "../components/ui/contact/contact.module.css";
import React from "react";
import { Modal } from "../components/ui/modal/modal";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  const [state, handleSubmit] = useForm("xknyjzze");
  const [sub, setSub] = useState(false);

  const handleSub = () => {
    setSub(true);
  };
  function closeModal() {
    setSub(false);
  }
  return (
    <Layout>
      <Head>
        <title>Contacto</title>
      </Head>
      <div className={s.trueCenter}>
        <div className={s.contactForm}>
          <form className={s.contactCont} onSubmit={handleSubmit}>
            <label className={s.email} htmlFor="email">
              Correo Electrónico
            </label>
            <div className={s.break} />
            <input
              className={s.emailBox}
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className={s.break} />
            <label className={s.email} htmlFor="message">
              Mensaje
            </label>
            <div className={s.break} />
            <textarea className={s.messageBox} id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className={s.break2} />

            <button
              type="submit"
              disabled={state.submitting}
              className={s.submit}
              onClick={handleSub}
            >
              Submit
            </button>
            <Modal float={true} isOpen={sub} setOpen={handleSub}>
              <div className={s.modalModal}>
                <img
                  className={s.icon}
                  src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666317402/tuempresaenlinea/icons/closeIcon_aksvjy.png"
                  onClick={() => closeModal()}
                />
                Se ha enviado su mensaje!
              </div>
              <div className={s.bgModal} onClick={() => closeModal()} />
            </Modal>
          </form>
        </div>
      </div>
    </Layout>
  );
}
