import { UserRectangle, ListDashes, MapPinLine } from 'phosphor-react'
import styles from './Logon.module.css'

export function Logon() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.partec}>
          <div className={styles.partec}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                <UserRectangle size={32} />
                <h4 className={styles.cadastro}>Tipo de cadastro</h4>
              </legend>
              <div className={styles.tipo}>
                <label className={styles.radio}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="tipo"
                    id="pessoa fisica"
                    value="PESSOA FISICA"
                  />
                  Pessoa Física
                </label>

                <label className={styles.radio}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="tipo"
                    id="pessoa juridica"
                    value="PESSOA JURÍDICA"
                  />
                  Pessoa Jurídica
                </label>
              </div>
            </fieldset>
          </div>

          <div className={styles.parte1}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                <ListDashes size={32} />
                <h4 className={styles.dados}>Dados Pessoais</h4>
              </legend>

              <div className={styles.form}>
                <p>
                  Nome
                  <input
                    className={styles.input}
                    type="text"
                    name="nome"
                    value=""
                  />
                </p>
                <p>
                  Sobrenome
                  <input
                    className={styles.input}
                    type="text"
                    name="sobrenome"
                    value=""
                  />
                </p>
                <p>
                  CPF/CNPJ
                  <input
                    className={styles.input}
                    type="text"
                    name="cpf"
                    value=""
                  />
                </p>
                <p>
                  Email
                  <input
                    className={styles.input}
                    type="text"
                    name="email"
                    value=""
                  />
                </p>
                <p>
                  Celular
                  <input
                    className={styles.input}
                    type="text"
                    name="celular"
                    value=""
                  />
                </p>
                <p>
                  Telefone
                  <input
                    className={styles.input}
                    type="text"
                    name="telefone"
                    value=""
                  />
                </p>
              </div>
            </fieldset>
          </div>
        </div>

        <div className={styles.parte2}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              <MapPinLine size={32} />
              <h4 className={styles.endereço}>Endereço</h4>
            </legend>

            <div className={styles.form}>
              <p>
                CEP
                <input
                  className={styles.input}
                  type="text"
                  name="CEP"
                  value=""
                />
              </p>
              <p>
                Endereço
                <input
                  className={styles.input}
                  type="text"
                  name="endereço"
                  value=""
                />
              </p>
              <p>
                Número
                <input
                  className={styles.input}
                  type="text"
                  name="numero"
                  value=""
                />
              </p>
              <p>
                Complemento
                <input
                  className={styles.input}
                  type="text"
                  name="complemento"
                  value=""
                />
              </p>
              <p>
                Referência
                <input
                  className={styles.input}
                  type="text"
                  name="referencia"
                  value=""
                />
              </p>
              <p>
                Bairro
                <input
                  className={styles.input}
                  type="text"
                  name="bairro"
                  value=""
                />
              </p>
              <p>
                Cidade
                <input
                  className={styles.input}
                  type="text"
                  name="cidade"
                  value=""
                />
              </p>
            </div>

            <div className={styles.formestado}>
              <label for="estado" className="col-sm-2 control-label">
                UF
              </label>
              <div className={styles.option}>
                <select className={styles.option} name="estado" id="estado">
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AM">AM</option>
                  <option value="AP">AP</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MG">MG</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="PA">PA</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="PR">PR</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="RS">RS</option>
                  <option value="SC">SC</option>
                  <option value="SE">SE</option>
                  <option value="SP">SP</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div>
        <a href="../index.html" target="_parent">
          <button type="submit" className={styles.botao1}>
            Cancelar
          </button>
        </a>
        <button type="submit" className={styles.botao2}>
          Enviar
        </button>
      </div>
    </div>
  )
}
