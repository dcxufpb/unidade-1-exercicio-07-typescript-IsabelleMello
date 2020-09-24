function dados_loja_param(nome_loja: string,
  logradouro: string,
  numero: number,
  complemento: string,
  bairro: string,
  municipio: string,
  estado: string,
  cep: string,
  telefone: string,
  observacao: string,
  cnpj: string,
  inscricao_estadual: string) {
  // Implemente aqui

   if (nome_loja == "") {
    throw new Error(`O campo nome da loja é obrigatório`);
  }
  
  if(logradouro == ""){
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }


const _logradouro : string = logradouro + ", ";
const _numero : string = numero ? `${numero}` : "s/n"
const _complemento : string = complemento && " " + complemento || "";
const _bairro : string = bairro && bairro + " - " || "";

 if ( municipio == ""){
    throw new Error(`O campo município do endereço é obrigatório`);
}

const _municipio : string = municipio + " - ";

if  (estado == ""){
  throw new Error(`O campo estado do endereço é obrigatório`);
 }

const _cep : string = cep && "CEP:" + cep || "";
let _telefone : string = telefone? `Tel ${telefone}` : ""
_telefone = _cep && _telefone? " " + _telefone : _telefone
const _observacao : string = observacao? observacao : ""

if  (cnpj == ""){
  throw new Error(`O campo CNPJ da loja é obrigatório`);
}

const _cnpj : string = "CNPJ: " + cnpj;
 
if  (inscricao_estadual == ""){
   throw new Error(`O campo inscrição estadual da loja é obrigatório`);
}

const _inscricao_estadual : string = "IE: " + inscricao_estadual;


  return `${nome_loja}
${_logradouro}${_numero}${_complemento}
${_bairro}${_municipio}${estado}
${_cep}${_telefone}
${_observacao}
${_cnpj}
${_inscricao_estadual}
`;
}

module.exports = dados_loja_param;
