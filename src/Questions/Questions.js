const QUESTIONS = {
    0: `PO1 – Definir um plano estratégico de TI: Esse processo foca na
        incorporação da TI e do gerenciamento do negocio na tradução de requisitos
        de negócio em ofertas de serviços, preocupando-se com a eficiência e
        transparência na entrega dos serviços.O comprometimento da alta direção
        no alinhamento estratégico de TI com as necessidades da empresa, assim
        como o entendimento da capacidade da TI, são pertinentes a este processo.`,
    1: `PO2 – Definir a Arquitetura da Informação: Esse processo busca melhorar a
        qualidade de decisões de gerenciamento, assegurando a integridade e a
        segurança dos dados, além de melhorar a efetividade e o controle de
        compartilhamento de informações.`,
    2: `PO3 – Determinar as Diretrizes da Tecnologia: Prove a determinação de um
        plano tecnológico que de suporte ao negócio, com isso estabelecer um plano
        de infraestrutura tecnológica e um conselho de arquitetura determine e
        estabeleça de forma clara as expectativas que a tecnologia é capaz de
        oferecer em termos de serviços, produtos, e mecanismos de entrega.`,
    3: `PO4 – Definir os Processos, Organização e Relacionamentos de TI: Aqui é
        criado um comitê estratégico com o intuito de supervisionar a direção de TI,
        além deste, um ou mais comitês são criados onde as áreas de negocio e TI 
        juntas, definem a priorização dos recursos de TI, alinhadas com as
        necessidades do negocio.`,
    4: `PO5 – Gerenciar o Investimento de TI: Busca estabelecer uma estratégia de
        gerenciamento de programas de investimentos em TI, contemplando custos,
        benefícios, prioridade dentro do orçamento, processo formal de definição
        orçamentária e gerenciamento de acordo com o orçamento.`,
    5: `PO6 – Comunicar Metas e Diretrizes Gerenciais: É estabelecido pela direção
        de TI um programa de comunicação continuo, a fim de articular a missão,
        metas, políticas e procedimentos. Esta ação auxilia no alcance dos objetivos
        de TI, pois desperta a consciência e o entendimento dos negócios, dos riscos
        de TI, dos objetivos e das diretrizes da organização.`,
    6: `PO7 – Gerenciar os Recursos Humanos: Esse processo é considerado
        critico porque a governança e o ambiente de controle de dados são muito
        dependentes da motivação e da competência das pessoas, portanto definir
        praticas de recrutamento, treinamento, avaliação de desempenho, promoção
        e desligamento, permitem a diminuição de riscos quanto a força de trabalho
        competente.`,
    7: `PO08 – Gerenciar a Qualidade: Um sistema de qualidade de serviços deve
        ser desenvolvido, pois assim a melhoria continua pode ser alcançada através
        de constante monitoramento, análise e comunicações de resultados às
        partes interessadas.`,
    8: `PO9 – Avaliar e Gerenciar os Riscos de TI: Esse processo orienta a criar e
        manter uma estrutura de gestão de risco onde é acordado e documentado
        um nível comum de riscos de TI, estratégias de mitigação e riscos residuais,
        onde qualquer impacto ocorrido que possa prejudicar o alcance dos objetivos
        da empresa, dever ser identificado, avaliado e tratado. Estratégias de
        redução de riscos devem ser adotadas a fim de minimizar os riscos residuais
        a níveis aceitáveis. As partes interessadas devem entender o resultado da
        avaliação dos riscos que por sua vez deve ser expresso em termos
        financeiros para que o risco seja alinhado a níveis aceitáveis.`,
    9: `PO10 – Gerenciar Projetos: Estabelece um programa e uma estrutura de
        gestão projetos para gerir todos os projetos de TI, onde devem ser
        asseguradas as prioridades e a coordenação dos mesmos. Ações como 
        atribuição de recursos, definição dos resultados a serem entregues,
        aprovação dos usuários divisão por fases de entrega, garantida de
        qualidade, plano formal de testes e revisão pós-implementação, ajudam a
        reduzir riscos, aperfeiçoa a comunicação, melhora o envolvimento das áreas
        de negocio e dos usuários finais, assegura o valor e a qualidade dos
        resultados e maximiza a contribuição para os investimentos em TI.`,
    10: `AI1 - Identificar Soluções Automatizadas: Esse processo contempla a
        definição de necessidades da organização junto a TI, referente à
        aquisição ou desenvolvimento de novas soluções de TI e esta decisão é
        tomada com base na revisão da viabilidade econômica e tecnológica,
        análise de riscos e custo-benefício e considerando soluções alternativas.`,
    11: `AI2 – Adquirir e Manter Software Aplicativo: Com o intuído de suportar
        adequadamente as operações de negocio através das aplicações
        corretas, esse processo permite a definição dos requisitos necessários
        para o desenvolvimento e a configuração das aplicações de acordo com
        padrões estabelecidos.`,
    12: `AI3 – Adquirir e Manter Infraestrutura de Tecnologia: Esse processo visa
        planejar a aquisição, manutenção e proteção da infraestrutura de TI e
        fornecer um ambiente de desenvolvimento e testes. Com isso é
        assegurado o apoio tecnológico continuo às aplicações do negocio.`,
    13: `AI4 – Habilitar Operação e Uso: Esse processo deve fornecer
        documentação e manuais para suportar os usuários de TI e promover
        treinamentos para assim assegurar a operação e o uso apropriado dos
        recursos de TI.`,
    14: `AI5 – Adquirir Recursos de TI: Esse processo se preocupa em adquirir
        recursos para suprir as necessidades de TI, onde se incluem pessoas,
        hardware, software, e serviços. Para isso é definido e aplicado
        procedimentos para aquisição, seleção de fornecedores, constituição de
        arranjos contratuais e a aquisição propriamente dita. Estas ações visam
        garantir que o setor de TI tenha todos os recursos necessários no tempo
        certo e obedecendo a uma boa relação de custo-benefício.`,
    15: `AI6 – Gerenciar Mudanças: Nesse processo é formalizada e registrada
        todas as ações de correções emergenciais e manutenções preventivas
        relacionados a infraestrutura de TI e ao ambiente de produção. Todo tipo
        de mudança deve obedecer a procedimentos de registro, avaliação, e
        autorização antes da implementação e revisão no final, tendo como base
        os resultados efetivos e planejados. Assegurando assim a amenização
        de riscos e impactos negativos na estabilidade e integridade do ambiente
        de produção.`,
    16: `AI7 – Instalar e Homologar Soluções e Mudanças: Esse processo objetiva
        a realização de testes específicos, em ambientes apropriados e utilizando
        dados de testes relevantes, com isso definir instruções de implantação e
        migração, planejamento de liberação de e mudanças no ambiente de
        produção e contempla um revisão pós-implementação. Esta ação
        assegura que os sistemas implantados estejam alinhados com as
        expectativas e resultados acordados.`,
    17: `DS1 – Definir e Gerenciar Níveis de Serviço: Esse processo busca
        acordar e documentar os níveis de serviços esperados da TI, incluindo o
        monitoramento e a geração de relatórios às partes interessadas,
        permitindo assim o alinhamento entre os serviços de TI e os requisitos do
        negócio.`,
    18: `DS2 – Gerenciar Serviços Terceirizados: Objetiva definir de forma clara
        as responsabilidades e expectativas em relação aos acordos de
        terceirização, monitorando e revisando tais acordos no intuito de verificar
        a efetividade e a conformidade em relação ao que foi contratado,
        promovendo assim a minimização de riscos de negócios associados aos
        fornecedores de serviços terceirizados.`,
    19: `DS3 – Gerenciar o Desempenho e a Capacidade: Esse processo realiza
        análises periódicas em relação ao desempenho e a capacidade dos
        recursos de TI, a fim de prever necessidades futuras se baseando em
        carga de trabalho, armazenamento e contingência, garantindo assim a
        continua disponibilidade dos recursos de TI.`,
    20: `DS4 – Assegurar a Continuidade dos Serviços: O foco de atuação desse
        processo é minimizar a probabilidade de ocorrências de interrupções dos
        serviços de TI, para isso o desenvolvimento, a manutenção e o teste de
        um plano de continuidade de TI, que contemple o armazenamento de
        cópias de segurança (backups) em instalações remotas (offsite), e a
        realização de treinamentos periódicos do plano de continuidade, são 
        ações que contribuirão incisivamente para a continuidade dos serviços
        de TI.`,
    21: `DS5 – Garantir a Segurança dos Sistemas: Nesse processo são
        estabelecidos procedimentos de segurança de TI, que incluem a
        monitoração, teste periódico e a adoção de ações corretivas em relação
        às deficiências ou incidentes de segurança, protegendo assim, todos os
        ativos de TI e minimizando riscos de vulnerabilidade e incidentes de
        segurança.`,
    22: `DS6 – Identificar e Alocar Custos: Com a intenção de construir e operar
        um sistema para capturar, alocar e reportar custos de TI aos usuários dos
        serviços, esse processo, permite tomadas de decisões mais embasadas
        referentes ao uso dos serviços.`,
    23: `DS7 – Educar e Treinar os Usuários: Identificando as necessidades de
        treinamento dos usuários dos serviços de TI, esse processo define uma
        estratégia de treinamentos e medição de resultados , proporcionando
        assim a otimização do uso efetivos dos serviços de TI, reduzindo os erros
        de usuários e aumentando a produtividade.`,
    24: `DS8 – Gerenciar a Central de Serviços e Incidentes: Esse processo
        implementa uma central de serviços (service desk) preparada para
        tratamento de incidentes, que inclui registro, encaminhamento, análise
        de tendência, análise de causa raiz e resolução, o que promove o
        aumento de produtividade através de resoluções rápidas dos chamados
        dos usuários possibilita o tratamento da causa raiz através de relatórios
        efetivos que são disponibilizados para as áreas de negocio.`,
    25: `DS9 – Gerenciar a Configuração: Esse processo estabelece a adoção de
        um repositório de configurações de hardware e software, que coleta
        informações de configuração, estabelece um perfil básico, verifica e
        audita as informações de configuração e atualiza o repositório de
        configuração conforme o necessário, promovendo assim maior
        disponibilidade do sistema, minimizando questões de produção e
        solucionando problemas mais rapidamente.`,
    26: `DS10 – Gerenciar Problemas: Esse processo visa identificar
        recomendações de melhorias quanto a manutenção de registros de 
        problemas e revisar a situação das ações corretivas, melhorando assim
        os níveis de serviços, reduzindo custos e aumentando a satisfação dos
        clientes.`,
    27: `DS11 – Gerenciar Dados: Esse processo trabalha com o estabelecimento
        de procedimentos que controlam a biblioteca de mídias, cópias de
        segurança (backups), recuperação de dados e descarte adequado de
        mídias, assegurando assim a qualidade, a rapidez e a disponibilidade dos
        dados de negócio.`,
    28: `DS12 – Gerenciar Ambiente Físico: Esse processo gerencia a definição
        do ambiente físico, incluindo os requisitos mínimos do local, a escola das
        instalações adequadas, o projeto de processos de monitoramento de
        fatores ambientais e gerenciamento de acesso de pessoas. Estas ações
        contribuem para a redução de riscos de danos causados a equipamentos
        ou pessoas.`,
    29: `DS13 – Gerenciar as Operações: Esse processo define politicas e
        procedimentos de operações de agendamento de atividades, proteção
        de resultados sigilosos, monitoramento de infraestrutura e manutenção
        preventiva de equipamentos de hardware, ajudando assim a manter a
        integridade dos dados e reduzindo os custos e atrasos das operações de
        TI.`,
    30: `ME1 – Monitorar e Avaliar o Desempenho da TI: Esse processo contempla a
        definição de indicadores de desempenho relevantes e oportunos aos negócios,
        assim como prove pronta ação em relação aos desvios encontrados,
        assegurando assim que as atividades planejadas estão sendo executadas e de
        acordo com as diretrizes e politicas estabelecidas.`,
    31: `ME2 – Monitorar e Avaliar os Controles Internos: O objetivo desse processo é
        monitorar o reporte das exceções de controle, dos resultados de autoavaliação
        e avaliação de terceiros. Esta ação é importante no sentido de que a monitoração
        dos controles internos asseguram uma operação eficaz e eficiente e a
        conformidade em relação às leis e regulamentos são obedecidas.`,
    32: `ME3 – Assegurar a Conformidade com Requisitos Externos: Esse processo
        promove a identificação de requisitos de conformidade com leis e
        regulamentações, assegura que os regulamentos são atendidos e integra os
        relatórios de conformidade de TI com as áreas do negocio.`,
    33: `ME4 – Prover Governança de TI: Esse processo visa assegurar que as
        estruturas organizacionais de processos, de liderança e de investimentos
        corporativos em TI estejam alinhadas e em conformidade com os objetivos e
        estratégias da empresa para assim garantir a aplicação da Governança de TI.`,
}

export default QUESTIONS;