/**
 * MAPA CONCEPTUAL INTERACTIVO: MACROTENDENCIAS EN SALUD EN ASIA ORIENTAL
 * Actualizado con el reporte: "Rol Actual y Prospectiva del Cuidado de Enfermería hacia 2040"
 * Implementación con Cytoscape.js basada en estructura_mapa_conceptual.jpeg
 * Modal Centrado Expandible + Conceptos Clave Explícitos Visibles en Nodos
 */

document.addEventListener('DOMContentLoaded', () => {
  // Secuencia de recorrido causal entre nodos
  const NODE_SEQUENCE = [
    'node_A',
    'node_B1',
    'node_B2',
    'node_D',
    'node_C1',
    'node_C2',
    'node_C3',
    'node_E',
    'node_F',
    'node_G',
    'node_H'
  ];

  let currentSelectedNodeId = null;

  // =========================================================================
  // 1. DICCIONARIO DE DATOS DETALLADOS POR NODO (BASE CIENTÍFICA Y EMPÍRICA)
  // =========================================================================
  const NODE_DETAILS = {
    node_A: {
      id: 'A',
      title: 'A. Configuración Geográfica y Megarregiones',
      category: '1. BASE: Contexto Causal',
      categoryClass: 'base',
      icon: '🗺️',
      summary: 'Configuración bio-espacial de seis territorios de gran escala: Japón, Corea del Sur, China Continental, Taiwán, Corea del Norte y Mongolia, dominados por cuencas fluviales continentales, megarregiones costeras y alta sismicidad en el Cinturón de Fuego del Pacífico.',
      description: 'Asia Oriental combina grandes cuencas fluviales continentales (Río Yangtsé de 6.300 km y Río Amarillo de 5.464 km), formaciones áridas extremas (Desierto de Gobi), elevaciones glaciares estratégicas (Meseta del Tíbet como "El Tercer Polo") y archipiélagos/penínsulas volcánicas de alta sismicidad. Esta geografía concentra las mayores megarregiones metropolitanas continuas del planeta: el Delta del Yangtsé (>160 millones de habitantes), la Gran Área de la Bahía Guangdong-Hong Kong-Macao (>86 millones), la Megalópolis de Tokio-Yokohama (>37 millones) y el Área Metropolitana de Seúl / Sudogwon (>26 millones), caracterizadas por una hiperdensidad urbana sin paralelo histórico expuesta a vulnerabilidades térmicas y epidemiológicas únicas.',
      hasMapImage: true,
      evidence: [
        {
          region: 'china',
          title: 'Cuencas Fluviales y Megarregiones',
          text: 'El Delta del Río Yangtsé (>160M hab.) y la Gran Área de la Bahía (>86M hab.) concentran más del 40% del PIB chino en llanuras aluviales de extrema densidad humana y logística.'
        },
        {
          region: 'japan',
          title: 'Megalópolis y Cinturón de Fuego',
          text: 'La Gran Área de Tokio-Yokohama concentra a 37.4 millones de personas, constituyendo la mayor aglomeración urbana del planeta en zona de recurrencia sísmica e islas de calor.'
        },
        {
          region: 'korea',
          title: 'Macrocefalia Metropolitana',
          text: 'El Área de la Capital de Seúl (Sudogwon) alberga a más de 26 millones de personas en solo el 11.8% del territorio nacional surcoreano (50.5% de la población nacional).'
        }
      ],
      quotes: [
        {
          text: 'The concentration of mega-urban clusters along the coastal and riverine basins of East Asia generates unprecedented logistical efficiencies, but concurrently amplifies systemic health shocks, thermal entrapment, and epidemiological contagion.',
          author: 'OMS / Western Pacific Regional Office (WPRO)'
        }
      ],
      nursingImplications: 'La extrema concentración espacial exige modelos de atención comunitaria descentralizada, preparación de brigadas de enfermería para desastres naturales e inundaciones costeras recurrentes, y respuesta ante saturación en urbes densas.'
    },

    node_B1: {
      id: 'B1',
      title: 'B. Proceso Histórico 1: La Revolución China y Transición Social',
      category: '1. BASE: Contexto Causal',
      categoryClass: 'base',
      icon: '📜',
      summary: 'Trayectoria desde la colectivización y los "Médicos Descalzos" (1949–1978) hasta la Reforma y Apertura, la imposición de la Política de Hijo Único (1979–2015) y la segmentación del registro civil Hukou.',
      description: 'La trayectoria histórica china reconfiguró de raíz la estructura de su sociedad: la política del hijo único (1979-2015) aceleró artificialmente la transición demográfica en menos de dos generaciones, creando la estructura familiar piramidal «4-2-1» (un único hijo adulto trabajador sosteniendo económicamente a dos padres de mediana edad y cuatro abuelos ancianos). Paralelamente, el sistema de registro civil de residencia (*Hukou*) segmentó los derechos de salud entre el campo y la ciudad, condicionando la salud de más de 376 millones de migrantes internos con derechos sanitarios restringidos en las metrópolis donde laboran.',
      evidence: [
        {
          region: 'china',
          title: 'Estructura Familiar «4-2-1»',
          text: 'Un único hijo trabajador es responsable de dos padres y cuatro abuelos, destruyendo la red informal de cuidados antes de que el país alcanzara el nivel de ingreso per cápita de las economías avanzadas.'
        },
        {
          region: 'china',
          title: 'Fractura del Sistema Hukou',
          text: 'El registro residencial rural impide que millones de trabajadores migrantes en fábricas costeras accedan a cobertura médica subsidiada en los hospitales urbanos donde residen.'
        }
      ],
      quotes: [
        {
          text: 'China transitioned from high fertility and high mortality to low fertility and low mortality in roughly 30 years—a trajectory that took Western nations over a century, leaving institutional care structures lagging severely behind.',
          author: 'Comisión Nacional de Salud de China (NHC)'
        }
      ],
      nursingImplications: 'Enfermería debe liderar la atención de ancianos "dejados atrás" en zonas rurales y articular redes de telecuidado para mitigar la ausencia de cuidadores familiares directos.'
    },

    node_B2: {
      id: 'B2',
      title: 'B. Proceso Histórico 2: Posguerra y el Milagro Económico',
      category: '1. BASE: Contexto Causal',
      categoryClass: 'base',
      icon: '⚙️',
      summary: 'Reconstrucción industrial de posguerra en Japón y auge de los "Cuatro Tigres Asiáticos" (Corea del Sur, Taiwán, Hong Kong, Singapur): capitalismo exportador, urbanización vertiginosa y cultura laboral extenuante.',
      description: 'En apenas cuatro décadas, la región experimentó un salto manufacturero y tecnológico vertiginoso fundamentado en una intensiva disciplina laboral, urbanización masiva y orientación a las exportaciones. Este éxito económico trajo consigo una transformación cultural severa: jornadas extenuantes (muertes por sobretrabajo *Karoshi* en Japón, *Gwarosa* en Corea del Sur y cultura *996* en China) y el quiebre del deber confuciano de piedad filial (*Xiao*) para el cuidado del adulto mayor en el hogar.',
      evidence: [
        {
          region: 'japan',
          title: 'El Milagro de Posguerra y la Reforma Kaigo Hoken',
          text: 'El agotamiento de la mujer como cuidadora no remunerada obligó a Japón en el año 2000 a promulgar el Seguro Estatal de Cuidados a Largo Plazo, hoy con más de 6.9 millones de beneficiarios certificados.'
        },
        {
          region: 'korea',
          title: 'Hipercompresión Temporal',
          text: 'Corea pasó de ser una economía agraria empobrecida en los años 50 a una potencia de semiconductores, pero con la tasa de fecundidad más baja del mundo (0.72).'
        }
      ],
      quotes: [
        {
          text: 'The hyper-accelerated economic compressions of East Asia decoupled economic prosperity from demographic renewal, generating acute socio-emotional stress and professional care dependencies.',
          author: 'Swiss National Science Foundation (NRP74)'
        }
      ],
      nursingImplications: 'La sobrecarga laboral histórica impone a enfermería el desafío de atender patologías por estrés crónico y reconstruir vínculos comunitarios en sociedades hipercompetitivas.'
    },

    node_D: {
      id: 'D',
      title: 'D. ¿Qué está cambiando? Disrupción Familiar y Multimorbilidad',
      category: '2. ESTADO ACTUAL: El Punto de Inflexión',
      categoryClass: 'actual',
      icon: '❓',
      summary: 'Erosión de la piedad filial confuciana (Xiao), proliferación masiva de hogares unipersonales (>70% en 2040) y aumento exponencial de la multimorbilidad senil y la fragilidad.',
      description: 'El modelo económico asiático ha topado con sus límites biológicos, ecológicos y sociofamiliares. Se acelera la desarticulación del modelo familiar tradicional confuciano de piedad filial (*Xiao*), con una proliferación sin precedentes de hogares unipersonales (que superarán el 70% de los hogares ancianos hacia 2040) y el abandono forzado del cuidado informal en casa. Paralelamente, la morbilidad se transforma hacia la multimorbilidad crónica y la fragilidad: explosión de patologías cardiovasculares (donde el ACV predomina sobre el infarto), diabetes tipo 2 con fenotipo asiático (a menor IMC) y demencias combinadas con dependencia motriz.',
      evidence: [
        {
          region: 'japan',
          title: 'Erosión del Cuidado Familiar Tradicional',
          text: 'Más del 70% de los hogares de adultos mayores en metrópolis japonesas y coreanas serán unipersonales en 2040, dejando a millones de ancianos sin ningún cuidador informal.'
        },
        {
          region: 'nurse',
          title: 'Perfil de Multimorbilidad Senil',
          text: 'El fenotipo asiático presenta diabetes y accidentes cerebrovasculares (ACV) a menor índice de masa corporal (IMC), multiplicando la complejidad del manejo farmacológico y de enfermería.'
        }
      ],
      quotes: [
        {
          text: 'The breakdown of traditional filial care in East Asia is occurring alongside the steepest rise in chronic multimorbidity ever recorded, creating an institutional care gap that hospitals alone cannot absorb.',
          author: 'Banco Mundial (2024)'
        }
      ],
      nursingImplications: 'Demanda un cambio paradigmático en el rol de enfermería: pasar del modelo reactivo hospitalocéntrico a una enfermería comunitaria integral con competencias en geriatría, salud ambiental e infectología.'
    },

    node_C1: {
      id: 'C1',
      title: 'C1. Transición Demográfica: Superenvejecimiento e Inversión',
      category: '2. ESTADO ACTUAL: Macrotendencia 1',
      categoryClass: 'actual',
      icon: '📈',
      summary: 'Epicentro mundial del desplome de fecundidad (Corea 0.72, Taiwán 0.87, China ~1.0, Japón 1.20) y de las sociedades súper-envejecidas con mayor rapidez en la historia (Japón 29.8%, Corea 20.3%).',
      description: 'Japón lidera como la sociedad más envejecida del mundo (29.8% ≥65 años). Corea del Sur y Taiwán comprimieron la transición del 14% al 20% en solo 7 a 8 años (frente a 24 años en Japón y más de un siglo en Europa). Con tasas de fertilidad críticas (Corea: 0.72; Seúl: 0.55; Taiwán: 0.87; China: ~1.0; Japón: 1.20), la base laboral de cuidados colapsa mientras la brecha entre esperanza de vida y vida saludable supera los 10 años.',
      evidence: [
        {
          region: 'japan',
          title: 'Japón: 92.000 Centenarios y 570k Déficit',
          text: '29.8% de la población ≥65 años. Esperanza de vida de 84.6 años vs vida saludable de 74.1 años (10.5 años de dependencia). Déficit proyectado de 570.000 cuidadores gerontológicos para 2040.'
        },
        {
          region: 'korea',
          title: 'Corea: TFR 0.72 y Razón de Dependencia Senil',
          text: 'Para 2050, el 40.1% de la población será mayor de 65 años, elevando la razón de dependencia senil a 78 adultos mayores por cada 100 trabajadores.'
        },
        {
          region: 'china',
          title: 'China: 297 Millones de Ancianos',
          text: 'Envejecer antes de enriquecerse: 21.1% de su población tiene ≥60 años con un déficit nacional proyectado de más de 10 millones de cuidadores certificados hacia 2035.'
        }
      ],
      quotes: [
        {
          text: 'Between 2020 and 2050, older persons in the Western Pacific will double to over 500 million. This requires shifting from episodic care to integrated, person-centred long-term care systems.',
          author: 'OMS / WPRO Healthy Ageing Action Plan'
        }
      ],
      nursingImplications: 'Urgencia de formar enfermeras especialistas en geriatría y cuidados paliativos, capaces de liderar redes de apoyo domiciliario y coordinar tecnologías robóticas asistenciales.'
    },

    node_C2: {
      id: 'C2',
      title: 'C2. Urbanización Extrema y Amenazas Ambientales',
      category: '2. ESTADO ACTUAL: Macrotendencia 2',
      categoryClass: 'actual',
      icon: '📈',
      summary: 'Concentración urbana del 66% al 92%, islas de calor urbano (golpe de calor Netchusho), tormentas de arena tóxica transfronteriza (Hwangsa/Kosa con PM2.5) y epidemia de miopía escolar (80-90%).',
      description: 'El calentamiento global en Asia Oriental interactúa con la densa matriz urbana de hormigón y asfalto, elevando las temperaturas nocturnas en 3 a 5 °C. Las olas de calor causan miles de hospitalizaciones por deshidratación y colapso cardiovascular en ancianos aislados (*Netchusho* en Japón). Simultáneamente, la desertificación del Gobi y Mongolia genera tormentas primaverales de polvo cargadas con partículas finas PM2.5, metales pesados y contaminantes industriales que cruzan mares enteros, mientras el encierro escolar y la falta de luz natural provocan una epidemia de miopía en el 80%–90% de los jóvenes urbanos.',
      evidence: [
        {
          region: 'japan',
          title: 'Tokio: Golpe de Calor (Netchusho)',
          text: 'Más del 80% de los decesos estivales por calor en Tokio ocurren en interiores entre adultos mayores que evitan encender el aire acondicionado por barreras económicas o de percepción.'
        },
        {
          region: 'korea',
          title: 'Tormentas de Polvo Hwangsa y PM2.5',
          text: 'Picos de PM2.5 que superan en 10 veces las guías de la OMS en Seúl e Incheon, disparando atenciones de urgencia por EPOC, asma y accidentes cerebrovasculares.'
        },
        {
          region: 'china',
          title: 'Epidemia Urbana de Miopía Infantil',
          text: 'Monitoreo de la NHC demostró que más del 80.5% de estudiantes de secundaria superior urbana padecen miopía por encierro y falta de luz solar.'
        }
      ],
      quotes: [
        {
          text: 'The urban heat island combined with transboundary dust events poses an immediate existential threat to frail older populations across our metropolitan corridors.',
          author: 'Tokyo Environmental & Health Resilience Strategy'
        }
      ],
      nursingImplications: 'Protocolos de monitoreo preventivo en olas de calor, educación comunitaria sobre hidratación geriátrica y manejo precoz de exacerbaciones respiratorias en días de alerta ambiental.'
    },

    node_C3: {
      id: 'C3',
      title: 'C3. Digitalización Masiva, IA Médica y Resistencia Antimicrobiana',
      category: '2. ESTADO ACTUAL: Macrotendencia 3',
      categoryClass: 'actual',
      icon: '📈',
      summary: 'Epicentro mundial de IA médica y telemedicina (>3.000 Hospitales de Internet en China, Sociedad 5.0 en Japón) en contraste directo con la emergencia del gen mcr-1 y superbacterias panresistentes (CRAB >75-86%).',
      description: 'Asia Oriental vive una profunda dualidad tecnosintética: por un lado, es la vanguardia global en aprobación de IA médica Clase III, plataformas masivas de Big Data sanitario (NHIS en Corea con >3 billones de registros) y subsidios masivos a la robótica asistencial (*Care Robots* y Sociedad 5.0 en Japón); por otro lado, la ganadería intensiva y la hiperdensidad clínica propiciaron la emergencia del gen transferible de resistencia plasmídica a colistina (*mcr-1*) y cepas panresistentes de *Acinetobacter baumannii* (CRAB >75-86%) y *Klebsiella pneumoniae* resistente a carbapenémicos (CRKP).',
      evidence: [
        {
          region: 'china',
          title: 'El Gen mcr-1 y Superbacterias',
          text: 'Identificado originariamente en granjas chinas, el gen de resistencia a colistina se diseminó a patógenos humanos y hospitales de toda Asia Oriental en pocos meses.'
        },
        {
          region: 'japan',
          title: 'Sociedad 5.0 y Robótica Asistencial',
          text: 'Japón subsidia masivamente la adopción de Care Robots para transferencias y sensores radar anticaídas ante la falta de cuidadores jóvenes.'
        },
        {
          region: 'korea',
          title: 'Resistencia Extrema CRAB en UCI',
          text: 'Las tasas de resistencia a carbapenémicos en Acinetobacter baumannii superan el 75-86% en unidades de cuidados intensivos metropolitanas.'
        }
      ],
      quotes: [
        {
          text: 'Without aggressive antimicrobial stewardship and One Health surveillance across agriculture and clinical sectors, standard clinical interventions will become lethal within a generation.',
          author: 'Directiva Regional de Resistencia Antimicrobiana OMS/WPRO'
        }
      ],
      nursingImplications: 'Liderazgo estricto de enfermería en comités de control de infecciones (PCI/IPC), mayordomía de antimicrobianos (AMS) y cumplimiento innegociable de protocolos de higiene y aislamiento.'
    },

    node_E: {
      id: 'E',
      title: 'E. Consecuencias Sanitarias y Crisis de Salud Mental',
      category: '2. ESTADO ACTUAL: Impacto Clínico y Social',
      categoryClass: 'crisis',
      icon: '💓',
      summary: 'Triada de ACV/demencias seniles, crisis de salud mental con suicidio récord OCDE (Corea 25.2/100k), sobretrabajo letal (Karoshi/Gwarosa/996), muertes en soledad (Kodokushi) e infecciones por patógenos resistentes.',
      description: 'El impacto combinado se materializa en tres frentes críticos: 1) Riesgos cardiorrespiratorios y cerebrovasculares agudos por interacción entre olas de calor y polución, con alta carga de demencias seniles; 2) Crisis de salud mental extrema con la tasa de suicidios más alta de la OCDE en Corea del Sur (25.2 por 100k, duplicando la media de países ricos), muertes por sobretrabajo (*Karoshi* en Japón, *Gwarosa* en Corea, cultura 996 en China) y muertes en soledad no detectadas (*Kodokushi*, *Godoksa*); y 3) Emergencias hospitalarias saturadas por patógenos resistentes a carbapenémicos.',
      evidence: [
        {
          region: 'korea',
          title: 'Corea: Récord de Suicidio en la OCDE',
          text: 'Tasa de 25.2 por 100.000 habitantes, duplicando el promedio de la OCDE, impulsada por soledad en adultos mayores y estrés competitivo en jóvenes.'
        },
        {
          region: 'japan',
          title: 'Muertes en Soledad (Kodokushi)',
          text: 'Miles de ancianos fallecen solos en departamentos urbanos sin que nadie lo detecte durante semanas, obligando a crear servicios de limpieza especial.'
        },
        {
          region: 'china',
          title: 'Sobretrabajo y Salud Mental Migrante',
          text: 'La cultura 996 y la segregación del sistema Hukou multiplican los trastornos depresivos no diagnosticados en trabajadores fabriles.'
        }
      ],
      quotes: [
        {
          text: 'The epidemiological reality in East Asia is no longer dominated by single infectious agents, but by the complex interplay of chronic multi-morbidity, severe environmental stress, and intense psychosocial suffering.',
          author: 'OECD Health at a Glance: Asia/Pacific'
        }
      ],
      nursingImplications: 'Atención holística que combine competencias clínicas de alta complejidad con apoyo emocional, tamizaje de ideación suicida y acompañamiento familiar en el final de la vida.'
    },

    node_F: {
      id: 'F',
      title: 'F. Población Más Vulnerable: Fractura Social',
      category: '2. ESTADO ACTUAL: Impacto Social',
      categoryClass: 'crisis',
      icon: '👥',
      summary: 'Adultos mayores en pobreza senil (Corea 39.8%), ancianos "dejados atrás" (Kongchao Laoren) en el campo chino, cuidadores familiares exhaustos en estructuras 4-2-1 y personal de salud con sobrecarga insostenible.',
      description: 'La vulnerabilidad no se distribuye de manera homogénea. Los grupos más impactados son: 1) Tercera edad en soledad y pobreza senil: Corea del Sur presenta un 39.8%-40.4% de pobreza relativa en ancianos; ancianos solos en Japón sin descendencia; 2) Comunidades rurales y "nido vacío" (*Kongchao Laoren*): millones de abuelos campesinos abandonados en el interior chino mientras sus hijos migraron a la costa; despoblación en municipios japoneses (*chouson*) con cierre de maternidades; y 3) Cuidadores familiares exhaustos en estructuras «4-2-1», cuidadores jóvenes (*Young Caregivers*) y el personal sanitario sometido a burnout crónico.',
      evidence: [
        {
          region: 'korea',
          title: 'Pobreza Senil del 39.8% en Corea',
          text: 'La tasa de pobreza relativa en mayores de 65 años en Corea es la más alta de la OCDE, obligando a millones de ancianos a recolectar cartón para subsistir.'
        },
        {
          region: 'china',
          title: 'Ancianos de Nido Vacío (Kongchao Laoren)',
          text: 'Más de 100 millones de adultos mayores viven completamente solos en el campo chino mientras sus hijos y nietos trabajan en las megarregiones costeras.'
        },
        {
          region: 'nurse',
          title: 'Colapso del Cuidador Formal e Informal',
          text: 'La sobrecarga física y moral en familias reducidas a un solo hijo desborda las redes familiares y genera desgaste extremo en el personal de enfermería.'
        }
      ],
      quotes: [
        {
          text: 'Inequity in East Asia manifests not solely through economic income, but through spatial geography, filial abandonment, and demographic entrapment.',
          author: 'Banco Mundial & OMS/WPRO'
        }
      ],
      nursingImplications: 'Priorizar programas de visita domiciliaria rural, unidades móviles de enfermería y campañas de salud escolar en prevención de miopía y salud mental infanto-juvenil.'
    },

    node_G: {
      id: 'G',
      title: 'G. ¿Qué debe hacer Enfermería? Los Cuatro Pilares Estratégicos',
      category: '3. PRONÓSTICO Y SOLUCIONES: El Rol Actual Transformador',
      categoryClass: 'solucion',
      icon: '👩‍⚕️',
      summary: 'El eje vertebrador de la salud comunitaria, la gestión de la cronicidad y la mediación tecnológica a través de cuatro pilares estratégicos: Transición a APS (Task-Shifting), Liderazgo Preventivo (ICOPE), Redes Domiciliarias "90-7-3" (Houmon Kango) y Gobernanza Ética de la Tecnología.',
      description: 'Frente a la tensión estructural de la región, la enfermería en Asia Oriental debe abandonar el rol hospitalocéntrico pasivo del siglo XX para consolidarse como el eje vertebrador de la salud comunitaria. Se definen cuatro pilares de acción estratégica respaldados por la OMS/WPRO, el Banco Mundial (2024) y la Asociación de Enfermería de Japón (JNA):',
      specialType: 'four_pillars',
      fourPillars: [
        {
          num: '1',
          title: 'Transición a la APS y Task-Shifting',
          desc: 'Descentralización del manejo de ENT (80% de complicaciones prevenibles en primer nivel según Banco Mundial 2024). Prescripción protocolizada y autonomía clínica delegada (Specified Practice Nurses en Japón, Nurse Practitioners en Taiwán/Corea), actuando como filtro resolutivo ante hospitales terciarios Clase 3A.'
        },
        {
          num: '2',
          title: 'Liderazgo Preventivo y Socioambiental',
          desc: 'Resiliencia climática con brigadas comunitarias en olas de calor (golpe de calor / netchusho) y contingencias por polvo Hwangsa. Tamizaje precoz de ideación suicida y depresión senil aplicando el marco ICOPE de la OMS para preservar la capacidad intrínseca.'
        },
        {
          num: '3',
          title: 'Redes Domiciliarias "90-7-3" y Cuidador Familiar',
          desc: 'Operativizar el deseo del 90% de ancianos de envejecer en casa (Ping An & Ageing Asia) mediante estaciones de visita domiciliaria (Houmon Kango en Japón). Prescripción de respiro y apoyo ergonómico en familias reducidas a la estructura "4-2-1" y cuidadores jóvenes.'
        },
        {
          num: '4',
          title: 'Gobernanza Ética de la Tecnología Asistencial',
          desc: 'Garantizar que la tecnología no deshumanice el acto de cuidar. Interpretación clínica de biosensores e IoT domiciliario sin invadir intimidad, supervisión de Care Robots y teleenfermería con calidez vincular que proteja el contacto humano compasivo.'
        }
      ],
      evidence: [
        {
          region: 'nurse',
          title: 'Banco Mundial (2024): 80% Complicaciones Prevenibles',
          text: 'El reporte del Banco Mundial demuestra que el 80% de los ACV, infartos y complicaciones de diabetes pueden evitarse con clínicas comunitarias lideradas por enfermeras con competencias diagnósticas avanzadas.'
        },
        {
          region: 'japan',
          title: 'Specified Practice Nurses (Japón)',
          text: 'Más de 38 procedimientos médicos protocolizados han sido delegados a enfermeras de práctica avanzada para atender residencias geriátricas sin demora médica.'
        },
        {
          region: 'china',
          title: 'Modelo Comunitario "90-7-3" (Ping An)',
          text: '90% del envejecimiento en el hogar con soporte telemático, 7% en centros diurnos comunitarios y 3% en residencias asistidas.'
        }
      ],
      quotes: [
        {
          text: 'Nurses are the backbone of health resilience in the Western Pacific. Without empowered nursing leadership driving integrated primary care, no system in this region will survive the aging peak of 2040.',
          author: 'Regional framework to shape a health workforce for the future, OMS/WPRO'
        }
      ],
      nursingImplications: 'Asumir el rol de abogadas sociales y gestoras clínicas de alto nivel. La enfermería no es solo asistencial: es la articuladora política y operativa del bienestar colectivo.'
    },

    node_H: {
      id: 'H',
      title: 'H. Cuidado de Enfermería hacia 2040: Bifurcación Prospectiva',
      category: '3. PRONÓSTICO Y SOLUCIONES: Prospectiva 2040',
      categoryClass: 'pronostico',
      icon: '👁️',
      summary: 'El horizonte de 2040 enfrenta una bifurcación histórica: el riesgo inercial distópico (déficit de 570.000 cuidadores, burnout y refugiados del cuidado) versus el modelo transformador de vanguardia de la JNA 2040 (sinergia High-Tech & High-Touch, exoesqueletos, cero burocracia y dignidad al morir).',
      description: 'Hacia 2040, Asia Oriental alcanzará el punto máximo de su curva de envejecimiento: la cohorte del baby-boom superará los 85-90 años, Japón registrará un déficit proyectado de 570.000 cuidadores gerontológicos, y en China más de 400 millones de personas tendrán más de 60 años. La literatura prospectiva de la JNA (Future Vision of Nursing 2040) y la OMS/WPRO plantea una bifurcación entre dos futuros posibles:',
      specialType: 'scenarios_2040',
      scenariosComparison: {
        distopic: {
          badge: '⚠️ Riesgo Inercial Distópico (Sin reforma)',
          title: 'La Inercia del Colapso',
          points: [
            'Déficit masivo e insostenible: brecha de 570k cuidadores en Japón y sobrecarga crítica en China y Corea.',
            'Cuidado industrializado y frío: robots utilizados como sustitutos baratos, ancianos confinados frente a pantallas sin afecto.',
            'Burnout epidémico y deserción: aumento de Karoshi/Gwarosa en personal sanitario y proliferación de «refugiados del cuidado» (Kaigo Nanmin).',
            'Precarización extrema: enfermeras atrapadas en tareas administrativas burocráticas soportando fallas sistémicas.'
          ]
        },
        transformative: {
          badge: '✨ Modelo Transformador de Vanguardia (JNA 2040)',
          title: 'La Enfermería de Vanguardia',
          points: [
            'Sinergia High-Tech & High-Touch: exoesqueletos motrices ligeros (Cyberdyne HAL) que erradican lesiones físicas en la enfermera.',
            'Cero burocracia: IA y modelos de voz ambiental que automatizan el 100% de registros clínicos en tiempo real.',
            'Recuperación del tiempo relacional: el tiempo presencial se dedica íntegramente a la escucha, contención existencial y contacto piel con piel.',
            'Autonomía clínica territorial: Nurse Practitioners al frente de Community Nursing Hubs gestionando el 90% de la cronicidad.',
            'Custodias de la dignidad y el buen morir (Mitori): acompañamiento afectivo a hogares unipersonales (>70%) y muerte serena en casa sin dolor ni encarnizamiento.'
          ]
        }
      },
      evidence: [
        {
          region: 'japan',
          title: 'JNA Future Vision of Nursing 2040',
          text: 'La hoja de ruta oficial de la Asociación de Enfermería de Japón establece que la robótica y la IA deben asumir la carga física y administrativa para liberar el valor humano insustituible de la enfermera.'
        },
        {
          region: 'nurse',
          title: 'Exoesqueletos y Cero Burocracia',
          text: 'Plataformas robóticas de soporte lumbar y documentación por voz ambiental reducen en más de un 60% la carga de fatiga muscular y tiempo administrativo de enfermería.'
        },
        {
          region: 'japan',
          title: 'Acompañamiento del Buen Morir (Mitori)',
          text: 'En un país con millones de ancianos sin descendencia, la enfermera comunitaria es la garante bioética del respeto a las voluntades anticipadas en el hogar.'
        }
      ],
      quotes: [
        {
          text: 'By 2040, nursing will harmonize state-of-the-art technological automation with profound human compassion, ensuring that individuals in super-aged communities live and conclude their lives with utmost dignity.',
          author: 'Asociación de Enfermería de Japón (JNA - Future Vision of Nursing 2040)'
        }
      ],
      nursingImplications: 'Este nodo representa la advertencia y la promesa del modelo conceptual: la acción transformadora de Enfermería (Nodo G) es la única palanca que puede evitar la inercia distópica y materializar la sinergia High-Tech & High-Touch hacia 2040.'
    }
  };

  // =========================================================================
  // 2. ELEMENTOS Y RELACIONES DE CYTOSCAPE (PRESET COORDINATES)
  // =========================================================================
  // Coordenadas espaciadas para albergar figuras amplias con conceptos clave explícitos
  // Eje horizontal total: 100 a 4800 px | Eje vertical: 50 a 1300 px | Centro Y = 640 px
  
  const cyElements = [
    // ----------------- CONTENEDORES PADRE (SECCIONES REGIONALES) ----------
    {
      data: {
        id: 'sec_base',
        label: 'BASE: Contexto Causal (A y B)',
        boxType: 'base'
      }
    },
    {
      data: {
        id: 'sec_actual',
        label: 'ESTADO ACTUAL: Impacto y Crisis (C, D, E y F)',
        boxType: 'actual'
      }
    },
    {
      data: {
        id: 'sec_futuro',
        label: 'PRONÓSTICO Y SOLUCIONES (G y H)',
        boxType: 'futuro'
      }
    },

    // Anclas invisibles para igualar alturas y límites de las 3 cajas
    { data: { id: 'anc_b_top', parent: 'sec_base' }, position: { x: 550, y: 50 } },
    { data: { id: 'anc_b_bot', parent: 'sec_base' }, position: { x: 550, y: 1230 } },
    { data: { id: 'anc_a_top', parent: 'sec_actual' }, position: { x: 2200, y: 50 } },
    { data: { id: 'anc_a_bot', parent: 'sec_actual' }, position: { x: 2200, y: 1230 } },
    { data: { id: 'anc_f_top', parent: 'sec_futuro' }, position: { x: 4120, y: 50 } },
    { data: { id: 'anc_f_bot', parent: 'sec_futuro' }, position: { x: 4120, y: 1230 } },

    // Anotación de texto "Si estas tendencias continúan," en la Sección 3
    {
      data: {
        id: 'anno_tendencias',
        parent: 'sec_futuro',
        label: 'Si estas tendencias continúan,'
      },
      position: { x: 4120, y: 160 }
    },

    // ----------------- NODOS ACTIVOS (CON CONCEPTOS CLAVE EXPLÍCITOS) -----
    // Sección 1: Base Causal
    {
      data: {
        id: 'node_A',
        parent: 'sec_base',
        label: 'A. Geografía: Asia Oriental\n───────────────────────────────\n• Cuencas Yangtsé y Amarillo\n• Megarregiones continuas (>160M hab.)\n• Alta sismicidad e hiperdensidad urbana',
        nodeType: 'base_rect',
        icon: '🗺️'
      },
      position: { x: 350, y: 640 }
    },
    {
      data: {
        id: 'node_B1',
        parent: 'sec_base',
        label: 'B. La Revolución China (1949)\n───────────────────────────────\n• Política de Hijo Único (1979-2015)\n• Estructura familiar piramidal "4-2-1"\n• Registro Hukou y migrantes rurales',
        nodeType: 'base_rect',
        icon: '📜'
      },
      position: { x: 860, y: 400 }
    },
    {
      data: {
        id: 'node_B2',
        parent: 'sec_base',
        label: 'B. Industrialización Asiática\n───────────────────────────────\n• Milagro económico y Cuatro Tigres\n• Urbanización vertiginosa exportadora\n• Desgaste extremo: Karoshi, Gwarosa y 996',
        nodeType: 'base_rect',
        icon: '⚙️'
      },
      position: { x: 860, y: 880 }
    },

    // Sección 2: Estado Actual
    {
      data: {
        id: 'node_D',
        parent: 'sec_actual',
        label: 'D. ¿Qué está cambiando?\n────────────────────────\nErosión familiar (Xiao) y hogares\nunipersonales (>70% en 2040),\ncon multimorbilidad senil y ACV',
        nodeType: 'circle_yellow',
        icon: '❓'
      },
      position: { x: 1390, y: 640 }
    },
    {
      data: {
        id: 'node_C1',
        parent: 'sec_actual',
        label: 'C1. Transición Demográfica\n───────────────────────────────────\n• Súper-envejecimiento récord (>20-30%)\n• Desplome fecundidad (TFR: Corea 0.72, TW 0.87)\n• Brecha HALE de dependencia (>10 años)',
        nodeType: 'hexagon_amber',
        icon: '📈'
      },
      position: { x: 1940, y: 310 }
    },
    {
      data: {
        id: 'node_C2',
        parent: 'sec_actual',
        label: 'C2. Urbanización y Clima\n───────────────────────────────────\n• Olas de calor urbano (golpe Netchusho)\n• Polvo transfronterizo Hwangsa y PM2.5\n• Epidemia de miopía escolar (80-90%)',
        nodeType: 'hexagon_amber',
        icon: '📈'
      },
      position: { x: 1940, y: 640 }
    },
    {
      data: {
        id: 'node_C3',
        parent: 'sec_actual',
        label: 'C3. IA Médica y RAM\n───────────────────────────────────\n• Epicentro de IA y >3k Hosp. de Internet\n• Emergencia y dispersión gen mcr-1\n• Superbacterias panresistentes (CRAB >80%)',
        nodeType: 'hexagon_amber',
        icon: '📈'
      },
      position: { x: 1940, y: 970 }
    },
    {
      data: {
        id: 'node_E',
        parent: 'sec_actual',
        label: 'E. Consecuencias en Salud\n───────────────────────────────────\n• ACV, demencias y diabetes tipo 2\n• Suicidio récord y muertes solas (Kodokushi)\n• Infecciones por bacterias panresistentes',
        nodeType: 'red_rect_large',
        icon: '💓'
      },
      position: { x: 2550, y: 640 }
    },
    {
      data: {
        id: 'node_F',
        parent: 'sec_actual',
        label: 'F. Población Más Vulnerable\n───────────────────────────────────\n• Ancianos en pobreza senil (Corea 39.8%)\n• Adultos mayores "nido vacío" (Kongchao)\n• Cuidadores familiares exhaustos y burnout',
        nodeType: 'red_rect_small',
        icon: '👥'
      },
      position: { x: 3100, y: 640 }
    },

    // Sección 3: Pronóstico y Soluciones
    {
      data: {
        id: 'node_G',
        parent: 'sec_futuro',
        label: 'G. ¿Qué debe hacer Enfermería?\n───────────────────────────────────\n1. Transición APS y Task-Shifting (NP / EPA)\n2. Liderazgo preventivo (Olas de calor e ICOPE)\n3. Redes domiciliarias "90-7-3" (Houmon Kango)\n4. Gobernanza ética de IA y robótica asistencial',
        nodeType: 'diamond_green',
        icon: '👩‍⚕️'
      },
      position: { x: 3770, y: 640 }
    },
    {
      data: {
        id: 'node_H',
        parent: 'sec_futuro',
        label: 'H. Cuidado hacia 2040: Bifurcación\n─────────────────────────────────────────────\n⚠️ RIESGO INERCIAL: Déficit 570k cuidadores,\ncuidados fríos y "refugiados del cuidado" (Kaigo Nanmin)\n✨ MODELO JNA 2040: Sinergia High-Tech & High-Touch,\nexoesqueletos sin burocracia y buen morir (Mitori)',
        nodeType: 'prospectiva_card',
        icon: '👁️'
      },
      position: { x: 4520, y: 640 }
    },

    // ----------------- ARISTAS: FLUJO PRINCIPAL SÓLIDO --------------------
    // Conexiones en Sección 1
    { data: { id: 'e_A_B1', source: 'node_A', target: 'node_B1', edgeType: 'solid' } },
    { data: { id: 'e_A_B2', source: 'node_A', target: 'node_B2', edgeType: 'solid' } },

    // Conexión Sección 1 -> Sección 2
    {
      data: {
        id: 'e_B1_D',
        source: 'node_B1',
        target: 'node_D',
        label: 'Moldea el presente',
        edgeType: 'solid_labeled'
      }
    },
    {
      data: {
        id: 'e_B2_D',
        source: 'node_B2',
        target: 'node_D',
        label: 'Moldea el presente',
        edgeType: 'solid_labeled'
      }
    },

    // Ramificación D -> C1, C2, C3
    { data: { id: 'e_D_C1', source: 'node_D', target: 'node_C1', edgeType: 'solid' } },
    { data: { id: 'e_D_C2', source: 'node_D', target: 'node_C2', edgeType: 'solid' } },
    { data: { id: 'e_D_C3', source: 'node_D', target: 'node_C3', edgeType: 'solid' } },

    // Convergencia C1, C2, C3 -> E
    { data: { id: 'e_C1_E', source: 'node_C1', target: 'node_E', edgeType: 'solid' } },
    { data: { id: 'e_C2_E', source: 'node_C2', target: 'node_E', edgeType: 'solid' } },
    { data: { id: 'e_C3_E', source: 'node_C3', target: 'node_E', edgeType: 'solid' } },

    // E -> F
    { data: { id: 'e_E_F', source: 'node_E', target: 'node_F', edgeType: 'solid' } },

    // F -> G (Intervención de Enfermería)
    {
      data: {
        id: 'e_F_G',
        source: 'node_F',
        target: 'node_G',
        label: 'Requiere intervención',
        edgeType: 'solid_labeled'
      }
    },

    // G -> H (Busca cambiar el pronóstico)
    {
      data: {
        id: 'e_G_H',
        source: 'node_G',
        target: 'node_H',
        label: 'Busca transformar el 2040',
        edgeType: 'solid_labeled'
      }
    },

    // ----------------- ARISTAS: RUTAS INERCIALES (DASHED BYPASS) ----------
    // Conectan C1, C2, C3 directamente con H rodeando E, F y G
    {
      data: {
        id: 'e_C1_H',
        source: 'node_C1',
        target: 'node_H',
        label: 'Si estas tendencias continúan...',
        edgeType: 'bypass_top'
      }
    },
    {
      data: {
        id: 'e_C2_H',
        source: 'node_C2',
        target: 'node_H',
        edgeType: 'bypass_mid'
      }
    },
    {
      data: {
        id: 'e_C3_H',
        source: 'node_C3',
        target: 'node_H',
        label: 'Si estas tendencias continúan...',
        edgeType: 'bypass_bot'
      }
    }
  ];

  // =========================================================================
  // 3. HOJA DE ESTILOS DE CYTOSCAPE (VISUAL DESIGN)
  // =========================================================================
  const cyStyle = [
    // --- ESTILO GENERAL DE NODOS (¡OBLIGATORIO: label: data(label)!) ---
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'content': 'data(label)',
        'font-family': "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        'font-weight': '700',
        'font-size': '14.5px',
        'min-zoomed-font-size': 0, // ¡CRÍTICO: Garantiza que la tipografía se renderice siempre!
        'text-valign': 'center',
        'text-halign': 'center',
        'text-wrap': 'wrap',
        'text-max-width': '400px',
        'line-height': 1.35,
        'transition-property': 'opacity, border-width, border-color, shadow-blur',
        'transition-duration': '0.2s',
        'cursor': 'pointer'
      }
    },

    // --- CONTENEDORES REGIONALES (COMPOUND NODES) ---
    {
      selector: ':parent',
      style: {
        'label': 'data(label)',
        'content': 'data(label)',
        'shape': 'round-rectangle',
        'corner-radius': '28px',
        'border-width': 3.2,
        'padding': '48px',
        'text-valign': 'top',
        'text-halign': 'center',
        'text-margin-y': 34,
        'font-family': "'Cinzel', 'Playfair Display', Georgia, serif",
        'font-size': '23px',
        'font-weight': '900',
        'letter-spacing': '0.04em',
        'events': 'no'
      }
    },
    {
      selector: '#sec_base',
      style: {
        'background-color': '#eaf0f8',
        'background-opacity': 0.88,
        'border-color': '#adc3dd',
        'color': '#1e3a5f'
      }
    },
    {
      selector: '#sec_actual',
      style: {
        'background-color': '#fdf7e7',
        'background-opacity': 0.88,
        'border-color': '#e6d299',
        'color': '#78350f'
      }
    },
    {
      selector: '#sec_futuro',
      style: {
        'background-color': '#ebf6ee',
        'background-opacity': 0.88,
        'border-color': '#b0d7b5',
        'color': '#14532d'
      }
    },

    // Anclas invisibles
    {
      selector: '[id ^= "anc_"]',
      style: {
        'width': 1,
        'height': 1,
        'opacity': 0,
        'events': 'no'
      }
    },

    // Anotación de texto "Si estas tendencias continúan,"
    {
      selector: '#anno_tendencias',
      style: {
        'label': 'data(label)',
        'content': 'data(label)',
        'width': 1,
        'height': 1,
        'background-opacity': 0,
        'border-width': 0,
        'font-family': "'Inter', sans-serif",
        'font-style': 'italic',
        'font-size': '18px',
        'font-weight': '700',
        'color': '#334155',
        'text-valign': 'center',
        'text-halign': 'center',
        'events': 'no'
      }
    },

    // --- TIPOS DE NODOS Y FORMAS (ESPACIOSOS Y LEGIBLES) ---
    // Nodos Base (A, B1, B2): Rectángulos redondeados azules
    {
      selector: '[nodeType = "base_rect"]',
      style: {
        'shape': 'round-rectangle',
        'corner-radius': '16px',
        'background-color': '#46749e',
        'border-color': '#284e70',
        'border-width': 3,
        'color': '#ffffff',
        'width': '420px',
        'height': '190px',
        'text-max-width': '380px',
        'shadow-blur': 14,
        'shadow-color': 'rgba(0, 0, 0, 0.16)',
        'shadow-offset-y': 4
      }
    },

    // Nodo D: Círculo amarillo dorado
    {
      selector: '[nodeType = "circle_yellow"]',
      style: {
        'shape': 'ellipse',
        'background-color': '#f6c944',
        'border-color': '#cb9413',
        'border-width': 3.5,
        'color': '#2a1602',
        'font-weight': '800',
        'font-size': '15px',
        'width': '250px',
        'height': '250px',
        'text-max-width': '200px',
        'shadow-blur': 14,
        'shadow-color': 'rgba(0, 0, 0, 0.16)',
        'shadow-offset-y': 4
      }
    },

    // Nodos C1, C2, C3: Hexágonos ámbar/dorados
    {
      selector: '[nodeType = "hexagon_amber"]',
      style: {
        'shape': 'hexagon',
        'background-color': '#f5c342',
        'border-color': '#cb9413',
        'border-width': 3,
        'color': '#2a1602',
        'width': '440px',
        'height': '210px',
        'text-max-width': '350px',
        'shadow-blur': 14,
        'shadow-color': 'rgba(0, 0, 0, 0.16)',
        'shadow-offset-y': 4
      }
    },

    // Nodo E: Rectángulo redondeado coral grande
    {
      selector: '[nodeType = "red_rect_large"]',
      style: {
        'shape': 'round-rectangle',
        'corner-radius': '18px',
        'background-color': '#df5656',
        'border-color': '#b72b2b',
        'border-width': 3,
        'color': '#ffffff',
        'width': '440px',
        'height': '280px',
        'text-max-width': '400px',
        'shadow-blur': 16,
        'shadow-color': 'rgba(0, 0, 0, 0.18)',
        'shadow-offset-y': 4
      }
    },

    // Nodo F: Rectángulo redondeado coral mediano
    {
      selector: '[nodeType = "red_rect_small"]',
      style: {
        'shape': 'round-rectangle',
        'corner-radius': '18px',
        'background-color': '#df5656',
        'border-color': '#b72b2b',
        'border-width': 3,
        'color': '#ffffff',
        'width': '430px',
        'height': '260px',
        'text-max-width': '390px',
        'shadow-blur': 14,
        'shadow-color': 'rgba(0, 0, 0, 0.18)',
        'shadow-offset-y': 4
      }
    },

    // Nodo G: Diamante verde esmeralda brillante
    {
      selector: '[nodeType = "diamond_green"]',
      style: {
        'shape': 'diamond',
        'background-color': '#2ca858',
        'border-color': '#1a7538',
        'border-width': 3.5,
        'color': '#ffffff',
        'width': '500px',
        'height': '500px',
        'text-max-width': '320px',
        'font-size': '14.5px',
        'shadow-blur': 16,
        'shadow-color': 'rgba(0, 0, 0, 0.18)',
        'shadow-offset-y': 4
      }
    },

    // Nodo H: Tarjeta de Prospectiva 2040 (Rectángulo redondeado amplio y de máximo contraste)
    {
      selector: '[nodeType = "prospectiva_card"], [nodeType = "rhomboid_green"]',
      style: {
        'shape': 'round-rectangle',
        'corner-radius': '22px',
        'background-color': '#14532d', // Verde bosque profundo (máximo contraste WCAG AAA > 11:1)
        'border-color': '#22c55e',     // Borde esmeralda vibrante de 4px
        'border-width': 4,
        'color': '#ffffff',            // Tipografía blanca pura, nítida y legible
        'font-weight': '700',
        'font-size': '15px',
        'line-height': 1.45,
        'width': '580px',              // Ampliado de 500px a 580px para holgura total
        'height': '340px',             // Ampliado de 300px a 340px para acomodar todo el texto
        'text-max-width': '530px',     // Permite líneas de hasta 56 caracteres sin cortes bruscos
        'text-outline-color': '#052e16',
        'text-outline-width': 1.2,
        'text-outline-opacity': 0.9,
        'shadow-blur': 20,
        'shadow-color': 'rgba(0, 0, 0, 0.22)',
        'shadow-offset-y': 5
      }
    },

    // --- ESTILO DE ARISTAS (EDGES) ---
    {
      selector: 'edge',
      style: {
        'width': 3.2,
        'line-color': '#334155',
        'target-arrow-color': '#334155',
        'target-arrow-shape': 'triangle',
        'arrow-scale': 1.35,
        'transition-property': 'opacity, width, line-color',
        'transition-duration': '0.2s'
      }
    },

    // Aristas con etiquetas visibles
    {
      selector: 'edge[label]',
      style: {
        'label': 'data(label)',
        'content': 'data(label)',
        'font-family': "'Inter', sans-serif",
        'font-size': '13.5px',
        'font-weight': '700',
        'color': '#0f172a',
        'text-background-color': '#ffffff',
        'text-background-opacity': 0.98,
        'text-background-padding': '6px',
        'text-background-shape': 'roundrectangle',
        'text-border-color': '#cbd5e1',
        'text-border-width': 1.5,
        'edge-text-rotation': 'autorotate'
      }
    },

    // Aristas ortogonales sólidas (taxi)
    {
      selector: '[edgeType = "solid"], [edgeType = "solid_labeled"]',
      style: {
        'curve-style': 'taxi',
        'taxi-direction': 'horizontal',
        'taxi-turn': '50%'
      }
    },
    {
      selector: '[edgeType = "solid_labeled"]',
      style: {
        'width': 4
      }
    },

    // Aristas discontinuas de Bypass Inercial (C1, C2, C3 -> H)
    {
      selector: '[edgeType ^= "bypass"]',
      style: {
        'curve-style': 'unbundled-bezier',
        'line-style': 'dashed',
        'line-dash-pattern': [9, 6],
        'line-color': '#475569',
        'target-arrow-color': '#475569',
        'width': 2.8,
        'color': '#1e293b'
      }
    },
    {
      selector: '#e_C1_H',
      style: {
        'control-point-distances': [-350, -350],
        'control-point-weights': [0.35, 0.75]
      }
    },
    {
      selector: '#e_C2_H',
      style: {
        'control-point-distances': [-180, -180],
        'control-point-weights': [0.35, 0.75]
      }
    },
    {
      selector: '#e_C3_H',
      style: {
        'control-point-distances': [350, 350],
        'control-point-weights': [0.35, 0.75]
      }
    },

    // --- ESTADOS INTERACTIVOS (SELECCIÓN Y RUTAS) ---
    {
      selector: 'node:selected, node.active-focus',
      style: {
        'border-width': 5.5,
        'border-color': '#2563eb',
        'shadow-blur': 26,
        'shadow-color': 'rgba(37, 99, 235, 0.5)'
      }
    },
    {
      selector: 'node.highlight-ancestor',
      style: {
        'border-width': 5,
        'border-color': '#0284c7',
        'shadow-blur': 22,
        'shadow-color': 'rgba(2, 132, 199, 0.5)'
      }
    },
    {
      selector: 'node.highlight-descendant',
      style: {
        'border-width': 5,
        'border-color': '#16a34a',
        'shadow-blur': 22,
        'shadow-color': 'rgba(22, 163, 74, 0.5)'
      }
    },
    {
      selector: 'edge.highlight-edge',
      style: {
        'width': 5.5,
        'line-color': '#2563eb',
        'target-arrow-color': '#2563eb',
        'z-index': 10
      }
    },
    {
      selector: '.dimmed',
      style: {
        'opacity': 0.16
      }
    }
  ];

  // =========================================================================
  // 4. INICIALIZACIÓN DE CYTOSCAPE
  // =========================================================================
  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: cyElements,
    style: cyStyle,
    layout: {
      name: 'preset',
      fit: true,
      padding: 60
    },
    minZoom: 0.16,
    maxZoom: 2.5,
    wheelSensitivity: 0.22,
    boxSelectionEnabled: false
  });

  cy.ready(() => {
    cy.fit(null, 50);
  });

  // =========================================================================
  // 5. CONTROLADOR DE LA VENTANA MODAL CENTRADA
  // =========================================================================
  const nodeModal = document.getElementById('nodeDetailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const modalNodeBadge = document.getElementById('modalNodeBadge');
  const modalNodeTitle = document.getElementById('modalNodeTitle');
  const modalNodeSummary = document.getElementById('modalNodeSummary');
  const modalNodeDescription = document.getElementById('modalNodeDescription');
  const modalEvidenceList = document.getElementById('modalEvidenceList');
  const modalQuoteContainer = document.getElementById('modalQuoteContainer');
  const modalQuoteBox = document.getElementById('modalQuoteBox');
  const modalNursingText = document.getElementById('modalNursingText');
  const modalGeoContainer = document.getElementById('modalGeoContainer');
  const modalSpecialSection = document.getElementById('modalSpecialSection');
  const modalSpecialTitle = document.getElementById('modalSpecialTitle');
  const modalSpecialContent = document.getElementById('modalSpecialContent');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalStepIndicator = document.getElementById('modalStepIndicator');
  const modalTracePathBtn = document.getElementById('modalTracePathBtn');

  function openNodeModal(nodeId) {
    const details = NODE_DETAILS[nodeId];
    if (!details) return;

    currentSelectedNodeId = nodeId;

    // Actualizar indicador de paso (Paso X de 11)
    const currentIndex = NODE_SEQUENCE.indexOf(nodeId);
    modalStepIndicator.textContent = `Paso ${currentIndex + 1} de ${NODE_SEQUENCE.length}`;
    modalPrevBtn.disabled = (currentIndex === 0);
    modalNextBtn.disabled = (currentIndex === NODE_SEQUENCE.length - 1);

    // Actualizar contenidos generales
    modalNodeBadge.textContent = details.category;
    modalNodeBadge.className = `node-badge ${details.categoryClass}`;
    modalNodeTitle.textContent = `${details.icon} ${details.title}`;
    modalNodeSummary.textContent = details.summary;
    modalNodeDescription.textContent = details.description;

    // Miniatura de mapa geográfico si es el nodo A
    if (details.hasMapImage) {
      modalGeoContainer.style.display = 'block';
    } else {
      modalGeoContainer.style.display = 'none';
    }

    // Sección Especial Dinámica: Los 4 Pilares (Nodo G) o Bifurcación 2040 (Nodo H)
    if (details.specialType === 'four_pillars' && details.fourPillars) {
      modalSpecialSection.style.display = 'block';
      modalSpecialTitle.textContent = '🌟 Los Cuatro Pilares Estratégicos de Enfermería en Asia Oriental';
      
      let html = '<div class="four-pillars-grid">';
      details.fourPillars.forEach(p => {
        html += `
          <div class="pillar-card">
            <div class="pillar-header">
              <span class="pillar-num">${p.num}</span>
              <h4 class="pillar-title">${p.title}</h4>
            </div>
            <p class="pillar-desc">${p.desc}</p>
          </div>
        `;
      });
      html += '</div>';
      modalSpecialContent.innerHTML = html;
    } else if (details.specialType === 'scenarios_2040' && details.scenariosComparison) {
      modalSpecialSection.style.display = 'block';
      modalSpecialTitle.textContent = '🔮 Bifurcación Prospectiva hacia 2040: Inercia vs Transformación';
      
      const dist = details.scenariosComparison.distopic;
      const trans = details.scenariosComparison.transformative;
      
      let html = `
        <div class="scenarios-comparison">
          <div class="scenario-col distopic">
            <span class="scenario-badge distopic">${dist.badge}</span>
            <h4>${dist.title}</h4>
            <ul class="scenario-list">
              ${dist.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
          </div>
          <div class="scenario-col transformative">
            <span class="scenario-badge transformative">${trans.badge}</span>
            <h4>${trans.title}</h4>
            <ul class="scenario-list">
              ${trans.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      modalSpecialContent.innerHTML = html;
    } else {
      modalSpecialSection.style.display = 'none';
      modalSpecialContent.innerHTML = '';
    }

    // Evidencia cuantitativa en grid
    modalEvidenceList.innerHTML = '';
    details.evidence.forEach(ev => {
      const card = document.createElement('div');
      card.className = `evidence-card ${ev.region}`;
      card.innerHTML = `<strong>${ev.title}</strong><p>${ev.text}</p>`;
      modalEvidenceList.appendChild(card);
    });

    // Citas textuales verificables
    modalQuoteBox.innerHTML = '';
    if (details.quotes && details.quotes.length > 0) {
      modalQuoteContainer.style.display = 'block';
      details.quotes.forEach(q => {
        const quoteEl = document.createElement('div');
        quoteEl.className = 'quote-box';
        quoteEl.innerHTML = `"${q.text}"<span class="quote-author">— ${q.author}</span>`;
        modalQuoteBox.appendChild(quoteEl);
      });
    } else {
      modalQuoteContainer.style.display = 'none';
    }

    // Implicaciones de Enfermería
    modalNursingText.textContent = details.nursingImplications;

    // Abrir modal con animación
    nodeModal.classList.add('open');
  }

  function closeNodeModal() {
    nodeModal.classList.remove('open');
  }

  modalCloseBtn.addEventListener('click', closeNodeModal);
  modalDoneBtn.addEventListener('click', closeNodeModal);

  // Cerrar al hacer clic en el backdrop oscuro
  nodeModal.addEventListener('click', (e) => {
    if (e.target === nodeModal) closeNodeModal();
  });

  // Navegación Secuencial en el Modal (Anterior / Siguiente)
  modalPrevBtn.addEventListener('click', () => {
    const currentIndex = NODE_SEQUENCE.indexOf(currentSelectedNodeId);
    if (currentIndex > 0) {
      const prevNodeId = NODE_SEQUENCE[currentIndex - 1];
      openNodeModal(prevNodeId);
      const cyNode = cy.getElementById(prevNodeId);
      if (cyNode) highlightCausalChain(cyNode);
    }
  });

  modalNextBtn.addEventListener('click', () => {
    const currentIndex = NODE_SEQUENCE.indexOf(currentSelectedNodeId);
    if (currentIndex < NODE_SEQUENCE.length - 1) {
      const nextNodeId = NODE_SEQUENCE[currentIndex + 1];
      openNodeModal(nextNodeId);
      const cyNode = cy.getElementById(nextNodeId);
      if (cyNode) highlightCausalChain(cyNode);
    }
  });

  // Botón Rastrear en el Mapa desde el Modal
  modalTracePathBtn.addEventListener('click', () => {
    if (currentSelectedNodeId) {
      const cyNode = cy.getElementById(currentSelectedNodeId);
      if (cyNode) {
        highlightCausalChain(cyNode);
        closeNodeModal();
        cy.animate({
          center: { eles: cyNode },
          zoom: 0.72,
          duration: 400
        });
        showToast(`Rastreando ruta causal de: ${NODE_DETAILS[currentSelectedNodeId].title}`);
      }
    }
  });

  // =========================================================================
  // 6. RASTREO CAUSAL Y EVENTOS EN EL CANVAS
  // =========================================================================
  function highlightCausalChain(targetNode) {
    cy.elements().removeClass('dimmed active-focus highlight-ancestor highlight-descendant highlight-edge');

    const ancestors = targetNode.predecessors().nodes();
    const descendants = targetNode.successors().nodes();
    const incomingEdges = targetNode.incomers().edges();
    const outgoingEdges = targetNode.outgoers().edges();

    cy.nodes().not(':parent').not(targetNode).not(ancestors).not(descendants).addClass('dimmed');
    cy.edges().not(incomingEdges).not(outgoingEdges).addClass('dimmed');

    targetNode.addClass('active-focus');
    ancestors.addClass('highlight-ancestor');
    descendants.addClass('highlight-descendant');
    incomingEdges.addClass('highlight-edge');
    outgoingEdges.addClass('highlight-edge');
  }

  function clearHighlights() {
    cy.elements().removeClass('dimmed active-focus highlight-ancestor highlight-descendant highlight-edge');
  }

  // Interacción al hacer clic en cualquier forma del mapa -> EXPANDIR MODAL
  cy.on('tap', 'node', (evt) => {
    const node = evt.target;
    if (node.isParent() || node.id().startsWith('anc_') || node.id() === 'anno_tendencias') return;

    highlightCausalChain(node);
    openNodeModal(node.id());
  });

  // Deseleccionar al hacer clic en el lienzo vacío
  cy.on('tap', (evt) => {
    if (evt.target === cy) {
      clearHighlights();
    }
  });

  // Tooltip al pasar el cursor
  const tooltip = document.getElementById('cyTooltip');
  cy.on('mouseover', 'node', (evt) => {
    const node = evt.target;
    if (node.isParent() || node.id().startsWith('anc_') || node.id() === 'anno_tendencias') return;

    const details = NODE_DETAILS[node.id()];
    if (details) {
      tooltip.textContent = `${details.icon} Clic para expandir detalle: ${details.title}`;
      tooltip.style.display = 'block';
    }
  });

  cy.on('mousemove', 'node', (evt) => {
    const renderedPos = evt.renderedPosition;
    tooltip.style.left = `${renderedPos.x}px`;
    tooltip.style.top = `${renderedPos.y}px`;
  });

  cy.on('mouseout', 'node', () => {
    tooltip.style.display = 'none';
  });

  // =========================================================================
  // 7. SELECTOR DE ESCENARIOS Y FILTRADO CONCEPTUAL
  // =========================================================================
  const scenarioBtns = document.querySelectorAll('.scenario-btn');

  function setScenario(scenarioKey) {
    clearHighlights();
    scenarioBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-scenario="${scenarioKey}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    switch (scenarioKey) {
      case 'all':
        cy.animate({ fit: { padding: 50 }, duration: 400 });
        showToast('Mostrando estructura conceptual completa');
        break;

      case 'base': {
        const baseNodes = cy.getElementById('node_A').union(cy.getElementById('node_B1')).union(cy.getElementById('node_B2'));
        const baseEdges = cy.getElementById('e_A_B1').union(cy.getElementById('e_A_B2'));
        cy.nodes().not(':parent').not(baseNodes).addClass('dimmed');
        cy.edges().not(baseEdges).addClass('dimmed');
        baseNodes.addClass('active-focus');
        baseEdges.addClass('highlight-edge');
        cy.animate({ fit: { eles: baseNodes, padding: 80 }, duration: 400 });
        showToast('Enfoque: 1. Base Causal Geográfica e Histórica');
        break;
      }

      case 'actual': {
        const actNodes = cy.getElementById('node_D')
          .union(cy.getElementById('node_C1'))
          .union(cy.getElementById('node_C2'))
          .union(cy.getElementById('node_C3'))
          .union(cy.getElementById('node_E'))
          .union(cy.getElementById('node_F'));
        const actEdges = cy.getElementById('e_D_C1')
          .union(cy.getElementById('e_D_C2'))
          .union(cy.getElementById('e_D_C3'))
          .union(cy.getElementById('e_C1_E'))
          .union(cy.getElementById('e_C2_E'))
          .union(cy.getElementById('e_C3_E'))
          .union(cy.getElementById('e_E_F'));
        cy.nodes().not(':parent').not(actNodes).addClass('dimmed');
        cy.edges().not(actEdges).addClass('dimmed');
        actNodes.addClass('active-focus');
        actEdges.addClass('highlight-edge');
        cy.animate({ fit: { eles: actNodes, padding: 80 }, duration: 400 });
        showToast('Enfoque: 2. Estado Actual, Impacto y Crisis');
        break;
      }

      case 'nursing': {
        const nurseNodes = cy.getElementById('node_F')
          .union(cy.getElementById('node_G'))
          .union(cy.getElementById('node_H'));
        const nurseEdges = cy.getElementById('e_F_G')
          .union(cy.getElementById('e_G_H'));
        cy.nodes().not(':parent').not(nurseNodes).addClass('dimmed');
        cy.edges().not(nurseEdges).addClass('dimmed');
        nurseNodes.addClass('active-focus');
        nurseEdges.addClass('highlight-edge');
        cy.animate({ fit: { eles: nurseNodes, padding: 80 }, duration: 400 });
        showToast('Enfoque: 3. Los Cuatro Pilares Estratégicos del Rol de Enfermería (Nodo G)');
        break;
      }

      case 'prospectiva': {
        const prospNodes = cy.getElementById('node_G').union(cy.getElementById('node_H'));
        const prospEdges = cy.getElementById('e_G_H').union(cy.getElementById('e_C1_H')).union(cy.getElementById('e_C2_H')).union(cy.getElementById('e_C3_H'));
        cy.nodes().not(':parent').not(prospNodes).addClass('dimmed');
        cy.edges().not(prospEdges).addClass('dimmed');
        prospNodes.addClass('active-focus');
        prospEdges.addClass('highlight-edge');
        cy.animate({ fit: { eles: prospNodes, padding: 80 }, duration: 400 });
        showToast('Enfoque: 4. Prospectiva 2040: Sinergia High-Tech & High-Touch vs Riesgo Inercial');
        break;
      }

      case 'inercial': {
        const inercialNodes = cy.getElementById('node_C1')
          .union(cy.getElementById('node_C2'))
          .union(cy.getElementById('node_C3'))
          .union(cy.getElementById('node_H'));
        const inercialEdges = cy.getElementById('e_C1_H')
          .union(cy.getElementById('e_C2_H'))
          .union(cy.getElementById('e_C3_H'));
        cy.nodes().not(':parent').not(inercialNodes).addClass('dimmed');
        cy.edges().not(inercialEdges).addClass('dimmed');
        inercialNodes.addClass('active-focus');
        inercialEdges.addClass('highlight-edge');
        cy.animate({ fit: { eles: inercialNodes, padding: 80 }, duration: 400 });
        showToast('Ruta Inercial: Macrotendencias conduciendo al colapso de 2040 sin intervención');
        break;
      }
    }
  }

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setScenario(btn.dataset.scenario);
    });
  });

  // =========================================================================
  // 8. CONTROLES DE ZOOM Y AJUSTE DE VISTA (NAVEGACIÓN FLOTANTE)
  // =========================================================================
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const fitBtn = document.getElementById('fitBtn');

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      cy.zoom({ level: cy.zoom() * 1.25, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } });
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      cy.zoom({ level: cy.zoom() * 0.8, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } });
    });
  }

  if (fitBtn) {
    fitBtn.addEventListener('click', () => {
      cy.animate({ fit: { padding: 50 }, duration: 350 });
    });
  }

  // =========================================================================
  // 9. MODAL DE ILUSTRACIÓN GEOGRÁFICA REGIONAL
  // =========================================================================
  const geoModal = document.getElementById('geoModal');
  const geoModalClose = document.getElementById('geoModalClose');

  function openGeoModal() {
    if (geoModal) geoModal.classList.add('open');
  }

  function closeGeoModal() {
    if (geoModal) geoModal.classList.remove('open');
  }

  if (modalGeoContainer) {
    modalGeoContainer.addEventListener('click', () => {
      closeNodeModal();
      openGeoModal();
    });
  }
  if (geoModalClose) geoModalClose.addEventListener('click', closeGeoModal);

  if (geoModal) {
    geoModal.addEventListener('click', (e) => {
      if (e.target === geoModal) closeGeoModal();
    });
  }

  // =========================================================================
  // 11. NOTIFICACIÓN TOAST RÁPIDA Y TECLAS DE ATAJO
  // =========================================================================
  const toast = document.getElementById('toastMsg');
  let toastTimer = null;

  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Tecla Escape para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNodeModal();
      closeGeoModal();
    }
  });
});
