**Essa pasta inclui os códigos utilizados no projeto Airbnb Garage. Cada página teve elementos reutilizados, como header, footer e os cards e suas imagens.**

&nbsp;<section class="garages-section">

&nbsp;       <h2>Garagens Disponíveis</h2>



&nbsp;       <div class="garages-container">



&nbsp;           <!-- Garagem 1 -->

&nbsp;           <div class="garage-card">

&nbsp;               <img src="https://i.pinimg.com/1200x/e5/f5/70/e5f570294c16724229e3b80ca8f3644d.jpg" alt="Garagem Centro">

&nbsp;               <div class="garage-info">

&nbsp;                   <h3>Garagem no Centro</h3>

&nbsp;                   <p><strong>Localização:</strong> Rua Principal, 123</p>

&nbsp;                   <p><strong>Segurança:</strong> Monitoramento 24h</p>

&nbsp;                   <p class="price">R$ 50 / hora</p>

&nbsp;                   <ul>

&nbsp;                       <li>Vaga coberta</li>

&nbsp;                       <li>Próximo ao comércio</li>

&nbsp;                       <li>Iluminação noturna</li>

&nbsp;                   </ul>

&nbsp;                   <a href="#" class="btn-reserve">Reservar</a>

&nbsp;               </div>

&nbsp;           </div>



&nbsp;           <!-- Garagem 2 -->

&nbsp;           <div class="garage-card">

&nbsp;               <img src="https://i.pinimg.com/736x/4c/b4/3c/4cb43cf4239d33b4f996ed2a02836d44.jpg" alt="Garagem Coberta">

&nbsp;               <div class="garage-info">

&nbsp;                   <h3>Vaga Coberta</h3>

&nbsp;                   <p><strong>Localização:</strong> Rua das Flores, 45</p>

&nbsp;                   <p><strong>Segurança:</strong> Acesso controlado</p>

&nbsp;                   <p class="price">R$ 30 / hora</p>

&nbsp;                   <ul>

&nbsp;                       <li>Proteção contra chuva e sol</li>

&nbsp;                       <li>Monitoramento 24h</li>

&nbsp;                       <li>Fácil acesso</li>

&nbsp;                   </ul>

&nbsp;                   <a href="#" class="btn-reserve">Reservar</a>

&nbsp;               </div>

&nbsp;           </div>



&nbsp;           <!-- Garagem 3 -->

&nbsp;           <div class="garage-card">

&nbsp;               <img src="https://i.pinimg.com/1200x/80/e5/17/80e517e5ef648472a03c03fdf9fcb6fb.jpg" alt="Garagem Residencial">

&nbsp;               <div class="garage-info">

&nbsp;                   <h3>Garagem Residencial</h3>

&nbsp;                   <p><strong>Localização:</strong> Bairro Tranquilo, 78</p>

&nbsp;                   <p><strong>Segurança:</strong> Vigia 24h</p>

&nbsp;                   <p class="price">R$ 20 / hora</p>

&nbsp;                   <ul>

&nbsp;                       <li>Vaga ao ar livre</li>

&nbsp;                       <li>Ambiente seguro</li>

&nbsp;                       <li>Fácil acesso à rua principal</li>

&nbsp;                   </ul>

&nbsp;                   <a href="#" class="btn-reserve">Reservar</a>

&nbsp;               </div>

&nbsp;           </div>



&nbsp;       </div>





&nbsp;   </section>



**Responsividade: foram utilizadas duas técnicas (media e meta viewport):**

<!DOCTYPE html>

<html lang="pt-br">

<head>

&nbsp;   <meta charset="UTF-8" />

&nbsp;   <meta name="viewport" content="width=device-width, initial-scale=1.0" />

&nbsp;   <title>Airbnb Garage - Listagem de Garagens</title>

* \- - - - - -  - - -



&nbsp;      /\* Responsividade \*/

&nbsp;       @media (max-width: 1000px) {

&nbsp;           .garages-container {

&nbsp;               grid-template-columns: repeat(2, 1fr);

&nbsp;           }

&nbsp;       }



&nbsp;       @media (max-width: 600px) {

&nbsp;           .garages-container {

&nbsp;               grid-template-columns: 1fr;

&nbsp;           }



&nbsp;           .menu {

&nbsp;               display: flex;

&nbsp;               flex-direction: column;

&nbsp;               text-align: center;

&nbsp;           }



&nbsp;           .menu a {

&nbsp;               margin: 8px 0;

&nbsp;           }

&nbsp;       }

