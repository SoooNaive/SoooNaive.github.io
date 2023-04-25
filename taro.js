"use strict";

  let taro = { 
     fool: { 
        title: "Шут", 
        description: "В течение дня нужно избегать предвзятости оценок и косности. Для того чтобы день сложился хорошо, нужно подходить ко всем делам творчески и с энтузиазмом. Не страшно, если придется начинать работу заново.", 
        advice: "Карта Шут, выпавшая в раскладе в качестве совета, рекомендует человеку быть искренним, добрым, открытым и спонтанным. Для того чтобы начать новую жизнь, нужно стать свободным, и в первую очередь это должна быть свобода от самого себя.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/shut.jpg" 
     }, 
     magician: { 
        title: "Маг", 
        description: "Гадающий должен сделать первый шаг, чтобы убедиться в своих способностях, которые раскроются в полной мере. Любые встречи и переговоры пройдут великолепно, если человек не побоится проявить свои навыки. Главное, чтобы присутствовала легкость и смелость в действиях, и все будет хорошо.", 
        advice: "Карта Таро призывает человека обратить внимание на свои способности и таланты. Ему просто необходимо поверить в себя, и браться за любые трудности, не взирая на сомнения. Более того, лучше с его собственной проблемой никто не справится. А то дело, за которое он будет браться, завершится успехом.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/mag.jpg"
     },
     priestess: { 
        title: "Верховная жрица", 
        description: "Карта Таро говорит о том, что человеку нужно прислушаться к внутреннему голосу и действовать согласно ситуации. В этот день стоит положиться на интуицию. Не следует искать объяснений и оправданий тем вопросам, которые не хочется принимать.", 
        advice: "Пока человек еще не смог разобраться в своих ощущениях, ему не желательно предпринимать опрометчивых и быстрых действий. Не стоит торопить события, все хорошее произойдет.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/zhritsa.jpg"
     },
     empress: { 
        title: "Императрица", 
        description: "Карта Таро говорит о том, что эта карта принесет увлекательный день. Возможно, человеку захочется отправиться на природу, чтобы дать энергию и подпитку своему организму и душе. У человека появится достаточно много интересных идей, а также творческих замыслов.", 
        advice: "Если действовать плодотворно, то можно добиться хороших результатов в своих делах и бизнесе. Не исключено, что бизнес будет расти и процветать. А также появятся новые идеи и проекты, которые также будут радовать человека и поднимать ему настроение.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/imperatritsa.jpg"
     },
     emperor: { 
        title: "Император", 
        description: "В качестве карты дня Император является хорошим предзнаменованием. Его появление говорит о том, что человеку в этот день будет удаваться все, за что он возьмется, его сил, энергии и решимости хватит на все. Если у него есть какое-либо сложное дело или проблема, решение которой долго откладывалось, надо взяться именно за это. Действовать нужно решительно, но взвешенно и основательно.", 
        advice: "Карта рекомендует не стесняться отстаивать свою точку зрения тем, кто уверен в своей правоте. Это необходимо и правильно. К цели следует идти, не пугаясь возможных препятствий, действуя последовательно и настойчиво.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/imperator.jpg"
     },
     hierophant: { 
        title: "Иерофант", 
        description: "Если вам выпал Верховный Жрец, то это получение толкового, разумного совета, подсказка о выходе из ситуации. Либо человек сам может стать учителем для кого-либо. Но не стоит самоутверждаться за счёт другого. Правила либо ритуалы, которые производились и помогали раньше, уже стали бессмысленны, и пустая болтовня не пригодится. Нужно смотреть внутрь дела, искать там ценности, которые с первого взгляда не видно. Вас могут вовлечь в какой-либо конфликт, но тогда вам лучше всего постараться либо избежать его, либо решить вопрос, не пренебрегая моралью. Если человек решился сделать какой-либо выбор, то он должен всё как следует обдумать, чтобы сделать всё правильно. В противном случае ему придется об этом очень сильно и долго жалеть.", 
        advice: "Верховный Жрец предупреждает вас о том, что возможно вас учат не тому, что правильно. Постарайтесь взглянуть на обучение с разных сторон, не застревайте в косности, не бойтесь выглянуть за рамки обыденности.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/ierofant.jpg"
     },
     lovers: { 
        title: "Влюбленные", 
        description: "Сегодня необходимо принять окончательное решение, независимо от того, связано ли это с профессиональной деятельностью или с какими-то личными делами. Если человек долго в чем-то сомневался или просто не торопил события, то теперь судьба дает ему шанс поставить окончательную точку. Пусть внутренний голос, сердце и ум – подскажут вам правильное решение. Карта дня обещает благополучное значение, а значит, направляет человека в нужное русло. Он должен склеить - разбитое, восстановить – разрушенное, помириться с теми, с кем в ссоре. Если мужчина хотел сделать предложение девушке – самое время.", 
        advice: "Конечно же, принимать решение наобум не следует, нужно внимательно рассмотреть все необходимые версии. Больше общайтесь с людьми, коллективом. Они уже отметили ваш новый гардероб, а значит, не исключены романтические отношения и успехи в карьере.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/vlyublennye.jpg"
     },
     chariot: { 
        title: "Колесница", 
        description: "Сегодня самое время достигать своих целей. И самое главное, сосредоточиться. Если есть какие-то важные и неотложные дела, необходимо их делать именно сегодня. Даже не стоит долго раздумывать, они будут выполнены качественно. Следует двигаться только вперед, преодолевая все препятствия на своем пути. Противоречия и конфликты будут устранены в этот день. Только решительные шаги и действия поспособствуют удаче. Но если на данном этапе нет цели, то можно заняться чем-нибудь новым. Будут удачными путешествия и поездки.", 
        advice: "Карта Таро призывает человека к решительным и активным действиям. Любые задачи и цели будут разрешимы, если человек сможет сконцентрироваться на них как следует. Но прежде чем, что-то делать, необходимо все обдумать и предусмотреть. Очень важно быть бдительным в любых ситуациях, проявляя свою изобретательность и самообладание. И тогда профессиональное развитие, и личностный рост вам обеспечены. Благодаря своей силе воле, человек в разных обстоятельствах будет выглядеть достойно.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/kolesnitsa.jpg"
     },
     strength: { 
        title: "Сила", 
        description: "Как карта дня Сила символизирует увлеченность и успех начинаний. Она рекомендует приложить свои таланты к работе или активизироваться в личном плане. В день, на который выпала такая карта, сил хватит на все. Если же возникнут какие-то проблемы и препятствия, не нужно пугаться. Они будут преодолимы, но действовать надо без агрессии, но решительно, не бояться и в контратаку переходить. Тогда все начинания обязательно закончатся успешно, а противник будет принужден к капитуляции.", 
        advice: "Карта рекомендует не бояться проблем и «черных полос» в жизни. Нужно любое дело делать с полной самоотдачей, быть открытым и искренним с дорогими людьми, не пытаясь играть с ними в какую-то хитрую политику. Свои цели лучше формулировать для себя четко и однозначно. Если решение принято, его нужно выполнять, и неважно, насколько это трудно. Однако не следует полагаться на прямой напор и грубость, худшие проявления своего характера необходимо контролировать даже в самых скверных ситуациях. Такое поведение обязательно поможет миновать неблагоприятный период и добиться желаемого.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/sila.jpg"
     },
     hermit: { 
        title: "Отшельник", 
        description: "Если Отшельник выпал в качестве карты дня, то в этот день следует полагаться, лишь на себя самого. Решения нужно принимать не спеша, взвешенно и именно что самостоятельно. Если имеются важные дела, делать их надо скрупулезно и ответственно, и опять-таки полагаясь исключительно на собственные возможности. Такой день отлично подойдет для ухода за собой, а особенно – для духовной практики, оценки собственной личности, медитаций.", 
        advice: "Карта рекомендует больше доверять собственным суждениям, но лишь тем из них, что явились результатом взвешенных размышлений. Отшельник говорит о том, что достижение цели требует выверенных планов и тщательного обдумывания своих действий. Он советует не бояться брать «тайм-аут» на рассмотрение ситуации и принятие решения – это даст желаемый результат. Также карта советует расти над собой, не пренебрегать духовным совершенствованием.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/otshelnik.jpg"
     },
     fotune: { 
        title: "Колесо Фортуны", 
        description: "Сегодня человека ожидают положительные события в жизни. И что бы ни происходило в судьбе человека, все нужно принимать с благодарностью. Есть возможность в этот день достичь многого, можно сделать первый шаг и проявить инициативу. Могут каким-то образом произойти события, которые будут из прошлой жизни. День полон приятных сюрпризов и неожиданностей, стоит полагаться на везенье и удачу. Сегодня все не случайно, обращайте свое внимание на знаки судьбы, они что-нибудь подскажут. Карта человека ведет к определенным событиям, которые должны произойти в его жизни. Это, действительно, можно назвать судьбой, которая улыбается.", 
        advice: "Если человек сумеет осознать свое предназначение в жизни, то все у него будет складываться прекрасно. Будет возможность не только хорошо проявить себя в карьере, но и будет возможность показать свои таланты, о которых многие даже не догадывались. Колесо фортуны помогает человеку наконец-то повзрослеть. Она показывает его бессилие перед судьбой, и говорит, что так будет лучше. Ведь не все в жизни зависит от нас, и это важно понять. И это даже хорошо, что не все подвластно человеку, потому что аркан стимулирует его рост и взросление.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/koleso_fortuny.jpg"
     },
     justice: { 
        title: "Справедливость", 
        description: "Аркан говорит о том, что необходимо очень хорошо и трезво размышлять над текущими делами. Если разрешается какой-либо конфликт, принимаются какие-либо решения, внимательно и дотошно просчитайте все последствия ваших действий. Просмотрите условия договора,не упускайте мелочей.", 
        advice: "Справедливость утверждает, чточеловек может что-либо потерять, обида может быть понесена незаслуженно, а деньги попросту пущены по ветру. Ваш партнёр или друг вешает вам на уши лапшу. Или ещё хуже - говорит в глаза одно, а сам занимается распространением порочащих вас слухов или клеветы у вас за спиной. Нельзя быть слишком эмоциональным, обольщаться миражами и строить замки на песке. Избегайте излишней самоуверенности, чтобы потом не плакать горькими слезами.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/pravosudie.jpg"
     },
     hanged: { 
        title: "Повешенный", 
        description: "Нужно набраться терпения и просто пережить этот день. Попытки как-то повлиять на события и ускорить их ход приведут только к противоположному результату. Лучше потратить время на осмысление положения и разработку планов действий на будущее. Иногда приходится думать о том, чем можно пожертвовать ради того, чтобы разрешить проблему, если нельзя вовсе отказаться от застопорившегося дела или оставить все как есть.", 
        advice: "Ни в коем случае не стоит идти напролом, пытаться решить проблему силой – будет хуже. Лучше попробовать поискать обходные маневры, и выбрать для этого максимально нестандартный маршрут. Стоит потерпеть, пока события начнут развиваться сами по себе, если такая возможность имеется. Если же ее нет, нужно готовиться к тому, что успех может обойтись достаточно дорого.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/poveshennyj.jpg"
     },
     death: { 
        title: "Смерть", 
        description: "В этот день для человека происходящее станет пройденным этапом (прошлое). Для кого-то это будет приятной вестью, что наконец-то это произошло и все завершилось, а кому-то не захочется расставаться, ведь это время так много значило для него. Но ничего здесь не поделаешь, нужно смириться с обстоятельствами, и подготовиться к тому, чтобы расстаться с прошлым. Нет смысла пытаться сохранить то, что было, попробуйте отпустить его. Только так по-настоящему можно будет почувствовать себя счастливым и свободным, правда понятие придет чуточку позже. Человек испытает облегчение и освобождение.", 
        advice: "Необходимо подготовить себя к переменам, которые произойдут в вашей жизни. С их появлением у человека полностью меняются взгляды на жизнь, он и сам в принципе становится совершенно другим человеком. Аркан указывает на то, что человеку просто необходимо пройти этот этап в своей жизни: пережить его и очиститься от всего прошлого. Жизнь так устроена: что-то проходит и заканчивается, утрачивает прежний смысл, но появляется нечто новое, что мы впускаем в свою судьбу. Ведь если человек не будет расставаться с ненужным и старым, то в его жизни не найдется место чему-то новому. Даже отказавшись от вредных и дурных привычек, человек внесет больше пользы, чем вреда. И этот поступок тоже можно будет назвать шагом к новым испытаниям.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/smert.jpg"
     },
     temperance: { 
        title: "Умеренность", 
        description: "Этот день можно, по истине, назвать волшебным. У человека произойдут в жизни какие-то новые открытия и события, что-то произойдет, связанное с творчеством. Возможно, у человека получится не только наладить свою жизнь, он сможет в чем-то помочь и другим людям, с удовольствием решит их проблемы. Если есть проблемы в любовных отношениях, то он с легкостью их наладит именно сегодня. Другого такого дня уже не будет, не упустите момент! Только в этот день можно сгладить острые углы и помириться со своей второй половиной. А если кто-то решил сделать предложение руки и сердца свой возлюбленной – делайте, она согласится.", 
        advice: "Необходимо любое начатое дело доводить до конца, чтобы в последствие не возникло больших трудностей. Очень важно в этот момент сохранять спокойствие и уравновешенность, находиться в гармонии с собой и окружающими. Не стоит кому-либо доказывать свою правоту и конфликтовать по этому поводу. Ему нужно браться за любое дело. Даже если перед человеком будут поставлены сложные задачи, он сумеет найти им оригинальное решение, потому что способен создавать нечто уникальное. Да и Ангел-хранитель будет всегда на его стороне. Он поможет ему наполнить свою жизнь глубоким смыслом, дружелюбием, взаимопониманием, терпением. Положитесь на судьбу.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/umerennost.jpg"
     },
     devil: { 
        title: "Дьявол", 
        description: "В этот день человек увидит теневую сторону своего характера. Возможно, кто-то собьет человека с пути и направит его на неблаговидный поступок, а может он и вовсе изменит своим принципам. Не исключено некое внутреннее побуждение, о котором человек даже не подозревал или просто думал, что уже давно все преодолел. Нельзя подавлять в себе это побуждение, не стоит и винить себя, перебрасывать вину на других. Необходимо найти причину этому импульсу. Человеку предстоит пройти немало испытаний, а скорее, искушений. И главное, чтобы он не вознесся над другими.", 
        advice: "Необходимо бороться со злом и несправедливостью. Ведь если человек еще не зашел слишком далеко, что-то можно изменить и исправить. Даже если человек совершил отнюдь нехороший поступок, то у него появляется уникальная возможность изменить себя, и встать на правильную дорогу для самосовершенствования. Ловушка, в которой человек оказался, сам себе ее и устроил. Необходимо присмотреться к действительности, а может вы жертва и живете в рабстве другого человека. Или наоборот используете свое положение и влияние на другого человека, которым просто манипулируете. Не важно, нельзя пользоваться своим положением, ровно также выступать в роли жертвы.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/dyavol.jpg"
     },
     tower: { 
        title: "Башня", 
        description: "Аркан гласит - в вашей жизни всё изменилось, вы потеряли то, что было вам очень дорого. Однако прошлое не вернуть, нужно извлечь из случившегося урок. Возможно, в будущем вы поймёте, что это потеря была для вас благоприятной. Если же Башня в перевернутом положении, это означает, что возможности у вас всё же есть, но они ограничены. Лучше всего оградить себя от нервного стресса, определите, что именно вам хочется.", 
        advice: "Башня предупреждает, хотите вы этого или нет, но ваша жизнь значительно изменится, и лучше всего смириться с наступившими изменениями. Вы можете кричать и впадать в панику, обвинять судьбу, но через некоторое время ваше мнение может измениться. Возможно, что все отношения, которые у вас были, вам уже не нужны, пришла пора от них избавиться. Возможно, что работа, которая у вас была, тоже не нужна для вашего развития. Так что постарайтесь отнестись к ситуации со здравым чувством юмора, спокойно разложить по полочкам и посмотреть, какими плюсами вы располагаете.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/bashnya.jpg"
     },
     star: { 
        title: "Звезда", 
        description: "Вам нужно ценить представившиеся вам возможности, верить в себя, вот что советует карта. Высшие силы благоволят вам, даже если ваша цель кажется нереальной, план сумасшедшим, не нужно останавливаться, вы поставили себе цель, и ничего им не помешает. Перспективы выйдут за рамки каких-то определённых договорённостей, и человек увидит препятствия, но одновременно увидит, как их преодолеть.", 
        advice: "Звезда говорит, что вас мучают сомнения, такой период не благоприятен для разных планов. Вы можете не обрести что-либо, а наоборот потерять, вот к чему приведет чрезмерная самоуверенность. Вы слишком много взяли на себя, возможно это не было нужно. Может быть, вы не верите в то, что новое дело будет надежным? Или сомневаетесь в себе? Может быть вы просто-напросто упрямец? Рассуждаете и сомневаетесь, осторожничаете, но скорее всего всё это будет не нужно. Иногда аркан свидетельствует, что человек построит какие-либо планы, а потом как будто специально хочет сам себе навредить, и начинает их рушить.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/zvezda.jpg"
     },
     moon: { 
        title: "Луна", 
        description: "День может человеку показаться неблагоприятным. Причиной этому может послужить дурной сон, который приснился. Не стоит придавать особого значения своим снам, и пугать себя призраками и мистикой. Если перед человеком стоит какое-то важное дело (пусть даже неприятное и сложное), не следует его избегать. Ведь после преодоления страха обязательно последует что-то новое и интересное. Просто нужно собраться с духом, и сделать этот важный и ответственный шаг. День стоит принимать таким, какой он есть. Несмотря на все боязни, пусть и медленными шагами, но надо двигаться вперед, а не назад. Уже позже можно будет обнаружить, как вы многого достигли.", 
        advice: "Научитесь преодолевать в себе страхи. Если человек сможет избавиться от своих страхов, то он сможет сделать значительный скачок вперед. Карта Луна поможет все преодолеть, исправить и усовершенствовать. Разве можно позволять призрачным трудностям вставать на своем пути? Нет, конечно. И сопротивляться нужно реальным проблемам, не говоря уже про какие-то сомнения. Не стоит подвергаться иллюзиям и заблуждениям, проявите ясность ума.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/luna.jpg"
     },
     sun: { 
        title: "Солнце", 
        description: "День запомнится ярким и счастливым. Либо это будет связано с какой-то победой, а возможно, просто день пройдет без проблем и забот. Следует взяться за какое-нибудь новое занятие, оно станет успешным. Не забывайте и о том, что найдутся люди, которые тоже захотят принять в этом участие. Не отказывайте им в такой возможности. Если с кем-то в этот день поссорились или кто-то на вас обижается, то лучше поскорее уладить этот вопрос. Нужно незамедлительно помириться, попросить прощения. Именно в этот день все получится.", 
        advice: "Самый главный совет – нужно верить в себя и свой успех. Только таким образом можно многого добиться в жизни. Человеку обязательно поможет его харизма и удачливость, жизненные цели и внутреннее мироощущение. Человек достаточно хорошо обладает той силой, знаниями и способностями, которые у него есть, чтобы уверенно следовать к своим целям. А счастье и радость станут его спутниками жизни. Нужно просто довериться судьбе и жить под лучами солнца, славы, добра, любви и богатства.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/solntse.jpg"
     },
     jugement: { 
        title: "Страшный суд", 
        description: "В день, на который выпала такая карта, можно решить любую проблему, и неважно, возникла она вчера или десять лет назад. Все может получиться даже само собой. Но от человека требуется внимательность, чтобы уловить правильный момент для действия. Если это получится – успех гарантирован. В определении нужной минуты следует полагаться исключительно на себя, собственное внутреннее чутье.", 
        advice: "Перемены в жизни неизбежны, и бояться их не следует. Нужно лишь быть уверенным в правильности собственного выбора. Не следует разочаровываться из-за того, что ранее часто случались неудачи. Это преходяще, события происходят и хорошие, и плохие, и это не изменить. Следует доверять собственному уму и сердцу, и двигаться в выбранном направлении, не спеша, но и не останавливаясь. А трудности получится преодолеть.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/sud.jpg"
     },
     world: { 
        title: "Мир", 
        description: "В этот день, как никогда, человек ощущает силы и гармонию с окружающим миром. Он в полной мере может насладиться этим днем, его спокойными и благоприятными очертаниями.Ему будет казаться, что все идет так, как и должно, либо он просто не придаст значения каким-то помехам. Если человек нуждается в месте, где он может найти себе приют, то карта дня направляет человека сделать этот шаг. Человек почувствует себя счастливым, и это может быть связано с дружбой, любовью, новым жильем. Он прекрасно будет выполнять свою работу. В отношениях с коллегами добьется искренности и гармонии. День может подарить поездку за границу от организации, где прекрасно сложится общение с зарубежными коллегами.", 
        advice: "Не стоит довольствоваться «синицей в руках», нужно искать свое призвание. Только активным и инициативным людям повезет больше других. А если человек стремится к высоким результатам, то без этих качеств ему просто не обойтись. Не нужно жаловаться на свои проблемы. Их нужно решать. Сами они никуда не денутся и не улетучатся. Проявите свою смелость, уверенность в успехе, будьте добры и щедры к людям. Берите от жизни все, получите то, о чем давно мечтали. Даже если покажется, что все хорошее уже произошло в вашей жизни, не останавливайтесь, ищите другие цели, и стремитесь к их реализации.",
        img: "https://gadalkindom.ru/wp-content/uploads/galerea-taro/taro_bezumnoj_luny/mir.jpg"
     }
  };

  function getCard() {
   var cardTaro = taro[Object.keys(taro)[Math.floor(Math.random() * Object.keys(taro).length)]]
   let cardImg = cardTaro.img;
   let cardTitle = cardTaro.title;
   let cardDescription = cardTaro.description;
   let cardAdvice = cardTaro.advice;

   console.log(taro.world.title);
   let modal = document.getElementById('modal-taro');
   modal.classList.toggle('modal-taro');

   let divDialog = document.createElement('div');
   modal.appendChild(divDialog);
   divDialog.setAttribute('id','modal-dialog');
   divDialog.classList.toggle('modal-dialog');

   let content = document.createElement('div');
   divDialog.appendChild(content);
   content.setAttribute('id','modal-content');
   content.classList.toggle('modal-content');

   let linkClose = document.createElement('button');
   linkClose.setAttribute('id','link-close');
   linkClose.classList.add("close");
   let linkText = document.createTextNode("x");
   linkClose.appendChild(linkText);
   document.getElementById("modal-content").appendChild(linkClose);

   let imgTaro = document.createElement('img');
   imgTaro.setAttribute('id','img-taro');
   imgTaro.setAttribute('src', cardImg);
   document.getElementById("modal-content").appendChild(imgTaro);

   let title = document.createElement('h2');
   document.getElementById("modal-content").appendChild(title);
   title.setAttribute('id','title');
   document.getElementById("title").append(cardTitle);

   let description = document.createElement('p');
   document.getElementById("modal-content").appendChild(description);
   description.setAttribute('id','description');

   let spanOne = document.createElement('span');
   spanOne.setAttribute('id','span');
   let spanTextOne = document.createTextNode("Карта дня:  ");
   spanOne.appendChild(spanTextOne);
   document.getElementById("description").append(spanOne);
   document.getElementById("description").append(cardDescription);

   let advice = document.createElement('p');
   document.getElementById("modal-content").appendChild(advice);
   advice.setAttribute('id','advice');

   let spanTwo = document.createElement('span');
   spanTwo.setAttribute('id','span');
   let spanTextTwo = document.createTextNode("Совет от карты:  ");
   spanTwo.appendChild(spanTextTwo);
   document.getElementById("advice").append(spanTwo);
   document.getElementById("advice").append(cardAdvice);

   

  


  function countProperties(taro) {
    var count = 0;
    for(var prop in taro) {
        if(taro.hasOwnProperty(prop))
            ++count;
    }
    console.log(count);
  }

  countProperties(taro);
};

document.getElementById('taro').addEventListener("click", function(event) {
   getCard();
   document.getElementById("link-close").addEventListener("click", function(e){
   document.getElementById("modal-taro").style.display = 'none';
 });
   document.getElementById('taro').addEventListener("click", function(ev) {
   document.getElementById("modal-taro").style.display = 'block';
 });
}, {once: true});



