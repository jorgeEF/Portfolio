import React from "react";
import "./AcercaDe.css";
import logoReact from "/assets/react.svg";
import logoVite from "/vite.svg";

export const AcercaDe = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row cards_categorias mx-0 my-3 text-left">
          <h2>Acerca de FastFood5</h2>
          <p>
            ¡Bienvenido a mi tienda online desarrollada con
            React! Este proyecto representa la culminación de mi esfuerzo
            para aplicar y consolidar los conocimientos adquiridos durante
            nuestro estudio en el curso de React de Codo a Codo. Mi aplicación de tienda online está diseñada para proporcionar a los
            usuarios una experiencia de compra fluida y atractiva. Integré los principios fundamentales de React para construir una
            interfaz de usuario dinámica y altamente interactiva, permitiendo a
            los clientes explorar fácilmente productos, agregarlos al carrito de
            compras y realizar transacciones de manera eficiente.
          </p>
          <div className="text-center">
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
          </div>
          <h2>Características Destacadas:</h2>
          <p>
            <strong>Componentización Avanzada: </strong>La
            aplicación se desglosó en componentes reutilizables, lo que facilita la gestión
            y escalabilidad del código. Cada parte de la aplicación, desde la
            barra de navegación hasta los elementos individuales del catálogo de
            productos, se ha implementado como un componente React
            independiente.
          </p>
          <p>
            <strong>Enrutamiento con React Router: </strong>
            Se implementó un enrutamiento eficaz con React Router, permitiendo
            una navegación suave entre las diferentes secciones de la tienda.
            Los clientes pueden explorar categorías, ver detalles de productos y
            acceder fácilmente al carrito de compras y otras secciones.
          </p>
          <p>
            <strong>Interactividad con Hooks de React: </strong>
            Se aprovecharon los Hooks de React para incorporar interactividad en
            nuestra aplicación. Desde el manejo de eventos hasta la gestión del
            ciclo de vida de los componentes, los Hooks han mejorado la
            funcionalidad y la respuesta del usuario.
          </p>
          <div className="text-center">
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
          </div>
          <h2>Gestión de Proyecto:</h2>
          <p>
            GitHub fue la plataforma central para el control de versiones, permitiéndo realizar un seguimiento detallado de los cambios en el código. Además, Trello
            fue fundamental para la gestión de tareas y la planificación, asegurando una ejecución sin problemas del proyecto.
          </p>
          <h2>Desafíos Superados:</h2>
          <p>
            Durante el desarrollo, me enfrenté a varios desafíos que fortalecieron
            mi comprensión de React. La gestión del estado, la sincronización de datos y la optimización del rendimiento fueron
            áreas clave en las que aplicamos técnicas avanzadas para superar obstáculos y mejorar la eficiencia de la aplicación.
          </p>
          <h2>Aprendizaje Continuo:</h2>
          <p>
            Este proyecto no solo representa el resultado de mi
            conocimiento actual, sino también el comienzo de un viaje
            continuo de aprendizaje. La tecnología está en constante evolución,
            y estamos comprometidos a seguir explorando nuevas características y
            mejores prácticas en el desarrollo con React. En resumen, esta aplicación de tienda online no solo es un escaparate de productos,
            sino también una muestra tangible de la capacidad para aplicar
            los principios de React en un entorno del mundo real. Espero que
            disfrutes explorando y experimentando con mi tienda online
            tanto como yo disfruté creándola. ¡Gracias por ser parte de
            mi viaje en el emocionante mundo de React!
          </p>
          <div className="text-center">
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
            <img className="logo logo-spin" src={logoReact} alt="" />
          </div>
          <h2 className="text-center">Desarrollado por Jorge E. Femenia</h2>
          <div className="text-center">
            <img className="logo logo-spin" src={logoVite} alt="" />
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
