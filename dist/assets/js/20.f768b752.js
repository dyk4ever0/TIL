(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{297:function(e,r,t){e.exports=t.p+"documents/gitbook-pages/.gitbook/assets/1731040602.png.webp"},298:function(e,r,t){e.exports=t.p+"documents/gitbook-pages/.gitbook/assets/스크린샷 2024-11-11 13.49.44.png.webp"},318:function(e,r,t){"use strict";t.r(r);var a=t(14),s=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"서버에-미국-ip-로그가-있을때"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#서버에-미국-ip-로그가-있을때"}},[e._v("#")]),e._v(" 서버에 미국 ip 로그가 있을때")]),e._v(" "),r("h3",{attrs:{id:"상황"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#상황"}},[e._v("#")]),e._v(" 상황")]),e._v(" "),r("p",[e._v("EC2 서버 로그에서 미국 IP 주소가 감지될 때 원인 분석과 대응 방법 알아보기미국 IP가 찍히는 원인서버 로그에서 미국 IP 주소가 보이며 GET /login과 같은 경로로 요청을 보낸 로그가 발견된 경우가 있었다.")]),e._v(" "),r("figure",[r("img",{attrs:{src:t(297),alt:""}}),r("figcaption",[r("p",[e._v("서버에 없는 메소드로 api를 호출한 흔적 로그")])])]),e._v(" "),r("h3",{attrs:{id:"확인-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#확인-방법"}},[e._v("#")]),e._v(" 확인 방법")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://whatismyipaddress.com/ip-lookup",target:"_blank",rel:"noopener noreferrer"}},[e._v("what is my IP address"),r("OutboundLink")],1),e._v(" 의 IP look-up 서비스로 간단히 주소를 찾아본다. 단체/기관명으로 DigitalOcean LLC와 Shadowserver 가 뜨는 것을 찾아볼 수 있었다.")]),e._v(" "),r("figure",[r("img",{attrs:{src:t(298),alt:""}}),r("figcaption")]),e._v(" "),r("p",[e._v("결론적으로 이들 로그는 Shadowserver나 DigitalOcean LLC와 같은 비영리 보안 기관에서 수행하는 자동 보안 스캔의 결과일 가능성이 크다. 이 기관들은 본인들 피셜(?) 인터넷에 노출된 IP를 대상으로 정기적으로 스캔을 수행하며, 보안 취약점을 진단하고 알려주는 역할을 한다고 한다.")]),e._v(" "),r("ul",[r("li",[e._v("자세한 정보는 "),r("a",{attrs:{href:"https://www.shadowserver.org/faq/why-are-your-ips-scanning-my-network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shadowserver"),r("OutboundLink")],1),e._v("의 FAQ에서 확인 가능")])]),e._v(" "),r("h3",{attrs:{id:"digitalocean-llc-와-shadowserver의-자동-포트-스캔"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#digitalocean-llc-와-shadowserver의-자동-포트-스캔"}},[e._v("#")]),e._v(" DigitalOcean LLC 와 Shadowserver의 자동 포트 스캔")]),e._v(" "),r("p",[e._v("DigitalOcean LLC와 Shadowserver의 자동 스캔은 포트 개방 여부나 보안 취약점 확인을 목적으로 수행된다.레딧의 "),r("a",{attrs:{href:"https://www.reddit.com/r/cybersecurity/comments/ut3ygj/excessive_port_scans_from_digital_ocean_llc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cybersecurity 포럼"),r("OutboundLink")],1),e._v("을 보니 여러 서버 운영자들이 DigitalOcean LLC의 IP 주소에서 포트 스캔을 경험하고 있으며, 이를 일반적인 클라우드 호스팅 환경의 특성으로 보고 있다. DigitalOcean은 저렴한 클라우드 호스팅을 제공하기 때문에 다양한 보안 리서치와 테스트 목적으로 사용되며, 이 과정에서 자동화된 스캔이 발생하는 경우가 많다.")]),e._v(" "),r("p",[e._v("DigitalOcean LLC와 Shadowserver의 자동 스캔은 포트 개방 여부나 보안 취약점 확인을 목적으로 수행된다.레딧의 "),r("a",{attrs:{href:"https://www.reddit.com/r/cybersecurity/comments/ut3ygj/excessive_port_scans_from_digital_ocean_llc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cybersecurity 포럼"),r("OutboundLink")],1),e._v("을 보니 여러 서버 운영자들이 DigitalOcean LLC의 IP 주소에서 포트 스캔을 경험하고 있으며, 이를 일반적인 클라우드 호스팅 환경의 특성으로 보고 있다. DigitalOcean은 저렴한 클라우드 호스팅을 제공하기 때문에 다양한 보안 리서치와 테스트 목적으로 사용되며, 이 과정에서 자동화된 스캔이 발생하는 경우가 많다.")]),e._v(" "),r("ul",[r("li",[e._v("🌊 레딧 서버 전문가들의 경험에 기반한 조언들 (요약: IP 노출되면 어쩔 수 없다고요. 신경쓰고 내 할일 하는게 정신건강을 지키는 일)"),r("br"),e._v(" "),r("code",[e._v('"포트 스캔은 DoS(서비스 거부 공격)를 일으키는 게 아닌 이상 그냥 일어나는 일이다. 막을 방법은 없다. 방화벽에서 ping 응답을 꺼두고 포트 규칙을 설정할 수는 있다. 근데 포트 스캔을 막겠다고 IP를 차단하는 건 마치 막대기로 바다의 파도를 막으려는 것과 같다. 접속을 시도하거나 DoS를 일으키지 않는 이상, 경고를 정보 레벨로 낮추고 무시하는 게 좋다."')]),r("br"),e._v(" "),r("code",[e._v("\"사이버 세계에 온 걸 환영해. 난 '포트 스캔은 일상이다'라는 철학에 전적으로 동의해. 어떤 IP가 악의적이고 어떤 게 그냥 소음(연구 스캐너)인지 빠르고 무료로 확인할 수 있는 좋은 도구가 하나 있어.")]),e._v(" "),r("a",{attrs:{href:"https://greynoise.io/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Greynoise.io")]),r("OutboundLink")],1),r("code",[e._v('라는 건데 완벽하진 않지만 여러 IP를 한꺼번에 입력해서 볼 수 있어."')]),r("br"),e._v(" "),r("code",[e._v('"인터넷에 IP를 노출해 두면 포트 스캔은 일상적인 일이다."')]),r("br"),e._v(" "),r("code",[e._v('"포트 스캔 자체는 범죄가 아니야. 다만 짜증날 수는 있지. 가장 우선시할 건 방화벽 정책을 견고하게 만드는 거야. 근데 이건 아마 경력이 좀 있는 사람이 할 일일 테지."')]),r("br"),e._v(" "),r("code",[e._v("\"이건 그냥 현실이야. 인터넷에 연결되어 있으면 스캔당할 수밖에 없어. 이런 활동에 너무 '놀라지' 말고, 그저 인지하고 불필요한 서비스나 패치되지 않은 애플리케이션이 없는지 항상 주의하는 게 중요해.\"")])])]),e._v(" "),r("h3",{attrs:{id:"서버-측-조치-방안"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#서버-측-조치-방안"}},[e._v("#")]),e._v(" 서버 측 조치 방안")]),e._v(" "),r("h4",{attrs:{id:"ip-화이트리스트-및-방화벽-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ip-화이트리스트-및-방화벽-설정"}},[e._v("#")]),e._v(" IP 화이트리스트 및 방화벽 설정")]),e._v(" "),r("p",[e._v("외부 접근이 불필요한 API나 서비스의 경우, 내부 개발팀에서 사용하는 IP만 허용하도록 IP 화이트리스트를 설정하고 방화벽을 구성한다. 이를 통해 승인되지 않은 외부 IP의 접근을 차단하고, 잠재적인 보안 위협을 최소화할 수 있다."),r("br"),e._v(" "),r("br"),e._v("\n로그 모니터링 및 경고 시스템 설정서버에 접속하는 IP 주소와 요청 패턴을 실시간으로 모니터링하여 비정상적인 접근 시도에 대해 경고를 받을 수 있도록 로그 모니터링 시스템을 구축한다. 이는 예기치 않은 외부 접근을 빠르게 인지하고 대응할 수 있게 도와준다."),r("br"),e._v(" "),r("br"),e._v("\nAPI 호출 오류 알림 설정API 호출 시 오류가 발생하거나 404 Not Found 응답이 빈번하게 발생하는 경우 이를 감지하여 즉각 알림을 보내는 에러 알림 시스템을 설정한다. 이러한 시스템을 통해 의심스러운 접근 시도가 반복될 경우 신속하게 대응할 수 있다.")]),e._v(" "),r("h3",{attrs:{id:"결론-겁먹지-말고-방화벽-세팅-잘하자🛡️"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#결론-겁먹지-말고-방화벽-세팅-잘하자🛡️"}},[e._v("#")]),e._v(" 결론: 겁먹지 말고 방화벽 세팅 잘하자🛡️")]),e._v(" "),r("p",[e._v("DigitalOcean LLC와 Shadowserver의 포트 스캔은 일반적으로 서버의 보안 상태를 점검하는 무해한 활동이다. 그러나 민감한 데이터를 다루는 서비스는 IP 화이트리스트와 방화벽 설정, 로그 모니터링 등의 보안 조치를 통해 추가적인 보호를 강화할 필요가 있다.")]),e._v(" "),r("p",[e._v("혹시라도 스캔해 오는 IP를 좀 괴롭히고 싶다면, 허니팟(타르 핏) 설정도 재미있는 방법. 타르 핏은 공격자의 자원을 소모시키면서 시간을 질질 끄는 방식으로, 딱히 위험하지는 않지만 그들 입장에선 진짜 답답한 상황을 만들 수 있음. 다만, 보안 평가 같은 스캔이면 오히려 평가 점수가 나빠질 수 있으니 주의하자.")]),e._v(" "),r("p",[e._v("인터넷에 서버를 두면 전 세계 수많은 '손님'이 쳐다보게 되어있음. 스캔 때문에 긴장할 필요는 없지만, 진짜 중요한 건 불필요한 서비스 차단과 보안 패치라고 조언. 서버가 오픈된 이상, 세상은 우리 서버를 기웃거리는 나쁜 사람들로 가득하다는 걸 기억하자.​")])])}),[],!1,null,null,null);r.default=s.exports}}]);