Essa pasta inclui os códigos utilizados no projeto Airbnb Garage. Cada página teve elementos reutilizados, como header, footer e os cards e suas imagens.
 <section class="garages-section">
        <h2>Garagens Disponíveis</h2>

        <div class="garages-container">

            <!-- Garagem 1 -->
            <div class="garage-card">
                <img src="https://i.pinimg.com/1200x/e5/f5/70/e5f570294c16724229e3b80ca8f3644d.jpg" alt="Garagem Centro">
                <div class="garage-info">
                    <h3>Garagem no Centro</h3>
                    <p><strong>Localização:</strong> Rua Principal, 123</p>
                    <p><strong>Segurança:</strong> Monitoramento 24h</p>
                    <p class="price">R$ 50 / hora</p>
                    <ul>
                        <li>Vaga coberta</li>
                        <li>Próximo ao comércio</li>
                        <li>Iluminação noturna</li>
                    </ul>
                    <a href="#" class="btn-reserve">Reservar</a>
                </div>
            </div>

            <!-- Garagem 2 -->
            <div class="garage-card">
                <img src="https://i.pinimg.com/736x/4c/b4/3c/4cb43cf4239d33b4f996ed2a02836d44.jpg" alt="Garagem Coberta">
                <div class="garage-info">
                    <h3>Vaga Coberta</h3>
                    <p><strong>Localização:</strong> Rua das Flores, 45</p>
                    <p><strong>Segurança:</strong> Acesso controlado</p>
                    <p class="price">R$ 30 / hora</p>
                    <ul>
                        <li>Proteção contra chuva e sol</li>
                        <li>Monitoramento 24h</li>
                        <li>Fácil acesso</li>
                    </ul>
                    <a href="#" class="btn-reserve">Reservar</a>
                </div>
            </div>

            <!-- Garagem 3 -->
            <div class="garage-card">
                <img src="https://i.pinimg.com/1200x/80/e5/17/80e517e5ef648472a03c03fdf9fcb6fb.jpg" alt="Garagem Residencial">
                <div class="garage-info">
                    <h3>Garagem Residencial</h3>
                    <p><strong>Localização:</strong> Bairro Tranquilo, 78</p>
                    <p><strong>Segurança:</strong> Vigia 24h</p>
                    <p class="price">R$ 20 / hora</p>
                    <ul>
                        <li>Vaga ao ar livre</li>
                        <li>Ambiente seguro</li>
                        <li>Fácil acesso à rua principal</li>
                    </ul>
                    <a href="#" class="btn-reserve">Reservar</a>
                </div>
            </div>

        </div>


    </section>

Responsividade: foram utilizadas duas técnicas (media e meta viewport):
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Airbnb Garage - Listagem de Garagens</title>
- - - - - -  - - -

       /* Responsividade */
        @media (max-width: 1000px) {
            .garages-container {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 600px) {
            .garages-container {
                grid-template-columns: 1fr;
            }

            .menu {
                display: flex;
                flex-direction: column;
                text-align: center;
            }

            .menu a {
                margin: 8px 0;
            }
        }