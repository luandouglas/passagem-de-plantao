const Plantao = {
  name: 'Plantao',
  primaryKey: 'id',
  properties: {
    id: 'int',
    data: 'string?',
    leito: 'int',
    identificacao: 'string',
    dia_internamento: 'string?',
    historia_admissao: 'string?',
    data_de_nascimento: 'string',
    procedencia: 'string',
    // DIAGNOSTICOS
    diagnosticos: 'string?[]',
    // NEURO
    paciente_sedado: 'bool?',
    paciente_sedado_doses: 'int?',
    paciente_acordado: 'bool?',
    //APARELHO CARDIOVASCULAR
    pressao: 'string?',
    pulso: 'int?',
    drogas_usadas: 'string?[]',
    //APARELHO RESPIRATORIO
    dieta: 'string?',
    glicemias: 'int?',
    abdome: 'string?',
    residuo_gastrico: 'int?',
    //APARELHO RENAL/METABOLICO:
    diurese: 'string?',
    balanco_higrico: 'string?',
    gasometrica: 'Gasometria?',
    exames_bioquimicos: 'ExamesBioquimicos?',
    //HEMATO/INFECCIOSO:
    febre: 'bool?',
    antibiotico: 'bool?',
    tipo_antibiotico: 'string?',
    data_antibiotico: 'string?',
    //INTERCORRENCIAS DO PERIODO:
    intercoorencias_periodo: 'string?',
    // PENDENCIAS DO CASO:
    pendencias_caso: 'string?',
  },
};
