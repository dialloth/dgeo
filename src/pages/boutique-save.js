import React from 'react'
import '../styles/saulieu.css'
//import Navbar from '../comps/Navbar';
import { NavLink } from "react-router-dom";
import {BsHandIndexThumb}from 'react-icons/bs';
import {GrLocation}from 'react-icons/gr';
import {GrIndicator}from 'react-icons/gr';

export default function home() {
  return (
    <div className='main'>
      <h1>Ici navbar ?</h1>
    {/* <Navbar /> */}
    <div className='container'>
      <div className='gauche'>
        <img src="map.jpg" alt="map" />
        <section className="legende">
        <h3> Legende : </h3>
        <div className='point'>
           <GrIndicator className='icon' />
          <p>
            Points de livraison La Fouchale existants
          </p>
        </div>
        <div className='demande'>
        <GrLocation className='icon'/>
          <p>
            Demandes d'ouverture de nouveau point de livraison effectuées par d'autres utilisateurs
          </p>
        </div>
        <div className='ouverture'>
        <BsHandIndexThumb className='icon' />
          <p>
            Cliquez sur la carte pour demander l'ouverture d'un point de livraison
          </p>
        </div>
        <div className='double1'>
        <BsHandIndexThumb className='icon' />  +  <GrIndicator className='icon' />
          <p>
          Cliquez sur un point de livraison pour le suivre ou demander à vous faire livrer à cet endroit
          </p>
        </div>
        <div className='double2'>
        <BsHandIndexThumb className='icon1' /> +  <GrIndicator className='icon1' />
          <p>
              Cliquez sur une demande d'ouverture de point de livraison pour demander également à être
              livré à cette adresse. Plus vous serez nombreux, plus vite nous ouvrirons ce nouveau point de
              livraison.
          </p>
        </div>
      </section>
      </div>
      
      <div className='droite'>
        <div className='paragraphe'>
          <h2> Boutique à Saulieu </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde mollitia praesentium illo 
            aliquam, molestias asperiores ex placeat, amet, dolor 
            consequatur odio cumque repellendus numquam distinctio voluptate perspiciatis hic incidunt nulla. consequatur odio cumque repellendus numquam distinctio voluptate perspiciatis
            hic incidunt nulla.
          </p>
            <NavLink to="/#" className='ensavoirplus'> En savoir plus </NavLink>
        </div>
        <div className='paragraphe'>
          <h2> Livraison gratuite chez vous dès 20€ </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde mollitia praesentium illo 
              aliquam, molestias asperiores ex placeat, amet, dolor 
              consequatur odio cumque repellendus numquam distinctio voluptate perspiciatis hic incidunt nulla. consequatur odio cumque repellendus numquam distinctio voluptate perspiciatis
              hic incidunt nulla.
            </p>
            <NavLink to="/#" className='ensavoir'> En savoir plus </NavLink>
        </div>
        <div className='paragraphe'>
          <h2> Marchés d'Atun et d'Avallon </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde mollitia praesentium illo 
            aliquam, molestias asperiores ex placeat, amet, dolor 
            consequatur odio cumque repellendus numquam distinctio voluptate perspiciatis hic incidunt nulla. consequatur odio cumque repellendus numquam distinctio voluptate perspiciatis
            hic incidunt nulla.
          </p>
            <NavLink to="/#" className='ensavoirplus'> En savoir plus </NavLink>
        </div>
      </div>
    </div>
   </div>
  )
}
