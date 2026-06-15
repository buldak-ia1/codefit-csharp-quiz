globalThis.ANDROID_QUESTIONS = [
  {
    id: "ac1", type: "choice", topic: "Content Provider",
    prompt: "컨텐트 프로바이더의 주된 목적은?",
    options: ["앱의 화면 디자인을 변경하기 위해 사용한다", "앱이 가진 데이터를 다른 앱과 공유하기 위해 사용한다", "앱의 실행 속도를 높이기 위해 사용한다", "액티비티 생명주기를 관리하기 위해 사용한다"],
    answer: 1, explanation: "컨텐트 프로바이더는 앱 데이터를 다른 앱과 안전하게 공유하기 위한 컴포넌트입니다."
  },
  {
    id: "ac2", type: "choice", topic: "Content Provider",
    prompt: "컨텐트 프로바이더에 접근할 때 필요한 객체는?",
    options: ["Intent", "ContentResolver", "BroadcastReceiver", "NotificationManager"],
    answer: 1, explanation: "ContentResolver를 통해 URI 기반으로 컨텐트 프로바이더에 접근합니다."
  },
  {
    id: "ac3", type: "choice", topic: "Content Provider",
    prompt: "통화 기록을 다루는 기본 컨텐트 프로바이더는?",
    options: ["Contacts", "MediaStore", "CallLog", "UserDictionary"],
    answer: 2, explanation: "CallLog는 통화 번호, 종류, 날짜 등의 통화 기록을 제공합니다."
  },
  {
    id: "ac4", type: "choice", topic: "MediaStore",
    prompt: "외부 저장소의 오디오 파일 정보를 얻기 위해 사용하는 URI는?",
    options: ["MediaStore.Audio.Media.EXTERNAL_CONTENT_URI", "MediaStore.Image.Media.INTERNAL_CONTENT_URI", "CallLog.Calls.CONTENT_URI", "ContactsContract.Contacts.CONTENT_URI"],
    answer: 0, explanation: "외장 저장소의 오디오 정보는 MediaStore.Audio.Media.EXTERNAL_CONTENT_URI로 조회합니다."
  },
  {
    id: "ac5", type: "choice", topic: "MediaStore",
    prompt: "MediaStore.Audio.Media 클래스에 대한 설명으로 알맞은 것은?",
    options: ["통화 기록을 삭제하는 클래스이다", "오디오 파일의 제목, 앨범, 아티스트 등의 정보를 얻을 수 있다", "알림 메시지를 생성하는 클래스이다", "브로드캐스트를 수신하는 클래스이다"],
    answer: 1, explanation: "MediaStore.Audio.Media는 기기의 오디오 미디어 메타데이터를 제공합니다."
  },
  {
    id: "ac6", type: "choice", topic: "Cursor",
    prompt: "ContentResolver의 query() 메소드 결과로 주로 반환되는 객체는?",
    options: ["Cursor", "Intent", "Bundle", "Toast"],
    answer: 0, explanation: "query() 결과는 행 단위로 탐색할 수 있는 Cursor로 반환됩니다."
  },
  {
    id: "ac7", type: "choice", topic: "Cursor",
    prompt: "Cursor에서 특정 컬럼의 인덱스 값을 얻을 때 사용하는 메소드는?",
    options: ["moveToNext()", "getColumnIndexOrThrow()", "getSystemService()", "notify()"],
    answer: 1, explanation: "getColumnIndexOrThrow()는 이름으로 컬럼 인덱스를 찾고 없으면 예외를 발생시킵니다."
  },
  {
    id: "ac8", type: "choice", topic: "Cursor",
    prompt: "Cursor에서 첫 번째 데이터 위치로 이동할 때 사용하는 메소드는?",
    options: ["moveToFirst()", "finish()", "startActivity()", "setContentView()"],
    answer: 0, explanation: "moveToFirst()는 Cursor를 첫 번째 행으로 이동시킵니다."
  },
  {
    id: "ac9", type: "choice", topic: "Cursor",
    prompt: "Cursor에서 다음 데이터로 이동할 때 사용하는 메소드는?",
    options: ["moveToNext()", "getAction()", "addFlags()", "requestPermissions()"],
    answer: 0, explanation: "moveToNext()를 반복 호출해 다음 행으로 이동하며 데이터를 읽습니다."
  },
  {
    id: "ac10", type: "choice", topic: "권한",
    prompt: "SDK 타겟 버전이 6.0 이상일 때 위험 권한을 사용하는 경우 필요한 처리는?",
    options: ["AndroidManifest.xml에만 작성하면 된다", "권한 처리가 전혀 필요 없다", "권한 선언과 함께 실행 중 사용자 권한 요청 처리가 필요하다", "앱을 다시 설치하면 자동 허용된다"],
    answer: 2, explanation: "위험 권한은 Manifest 선언뿐 아니라 런타임 권한 요청도 필요합니다."
  },
  {
    id: "ac11", type: "choice", topic: "Broadcast Receiver",
    prompt: "브로드캐스트 리시버의 설명으로 가장 알맞은 것은?",
    options: ["사용자가 직접 입력하는 UI 컴포넌트이다", "시스템 또는 앱에서 발생한 방송 메시지를 수신하는 컴포넌트이다", "데이터베이스 테이블을 직접 생성하는 클래스이다", "알림 아이콘 이미지를 저장하는 폴더이다"],
    answer: 1, explanation: "BroadcastReceiver는 시스템이나 앱에서 발생한 방송 메시지를 수신합니다."
  },
  {
    id: "ac12", type: "choice", topic: "Broadcast Receiver",
    prompt: "BroadcastReceiver 클래스를 상속받아 구현할 때 오버라이딩하는 핵심 메소드는?",
    options: ["onCreate()", "onStart()", "onReceive()", "onClick()"],
    answer: 2, explanation: "브로드캐스트가 수신되면 onReceive()가 호출됩니다."
  },
  {
    id: "ac13", type: "choice", topic: "Broadcast Receiver",
    prompt: "브로드캐스트 리시버는 일반적으로 사용자에게 직접 UI를 보여주는가?",
    options: ["항상 보여준다", "조건 없이 다이얼로그를 띄운다", "직접 상호작용하지 않는 것이 일반적이다", "반드시 액티비티보다 먼저 실행된다"],
    answer: 2, explanation: "리시버 자체는 UI가 아니며 보통 알림이나 Activity 실행으로 반응합니다."
  },
  {
    id: "ac14", type: "choice", topic: "Broadcast Receiver",
    prompt: "부팅 완료 시 발생하는 브로드캐스트 액션은?",
    options: ["ACTION_TIME_CHANGED", "ACTION_BOOT_COMPLETED", "ACTION_SCREEN_OFF", "ACTION_MEDIA_EJECT"],
    answer: 1, explanation: "장치 부팅이 완료되면 ACTION_BOOT_COMPLETED가 발생합니다."
  },
  {
    id: "ac15", type: "choice", topic: "Broadcast Receiver",
    prompt: "ACTION_BATTERY_CHANGED는 어떤 상황과 관련 있는가?",
    options: ["배터리 잔량 또는 충전 상태 변화", "화면 꺼짐", "날짜 변경", "카메라 버튼 클릭"],
    answer: 0, explanation: "ACTION_BATTERY_CHANGED는 배터리 상태 변화 정보를 전달합니다."
  },
  {
    id: "ac16", type: "choice", topic: "Broadcast Receiver",
    prompt: "브로드캐스트 리시버를 Manifest에 등록할 때 사용하는 요소는?",
    options: ["<activity>", "<receiver>", "<service>", "<provider>"],
    answer: 1, explanation: "정적 브로드캐스트 리시버는 Manifest의 <receiver> 요소로 등록합니다."
  },
  {
    id: "ac17", type: "choice", topic: "Intent",
    prompt: "인텐트 필터의 역할로 알맞은 것은?",
    options: ["앱의 색상을 지정한다", "앱 컴포넌트가 받고자 하는 인텐트를 정의한다", "데이터베이스를 정렬한다", "알림 아이콘 크기를 조절한다"],
    answer: 1, explanation: "Intent Filter는 컴포넌트가 처리할 수 있는 액션과 데이터 등을 정의합니다."
  },
  {
    id: "ac18", type: "choice", topic: "Intent",
    prompt: "onReceive(Context context, Intent intent)에서 Intent를 사용하는 주된 이유는?",
    options: ["앱의 테마를 변경하기 위해", "수신한 브로드캐스트의 동작이나 액션을 구분하기 위해", "오디오 파일을 재생하기 위해", "권한 요청 결과를 저장하기 위해"],
    answer: 1, explanation: "전달된 Intent에서 action과 부가 데이터를 확인해 수신 내용을 구분합니다."
  },
  {
    id: "ac19", type: "choice", topic: "Task",
    prompt: "태스크(Task)에 대한 설명으로 가장 알맞은 것은?",
    options: ["앱 내부의 데이터베이스 파일이다", "사용자가 하나의 애플리케이션처럼 느끼는 액티비티들의 집합이다", "알림 메시지의 제목이다", "브로드캐스트 액션의 이름이다"],
    answer: 1, explanation: "Task는 사용자 관점에서 하나의 작업 흐름을 이루는 Activity 집합입니다."
  },
  {
    id: "ac20", type: "choice", topic: "Task",
    prompt: "액티비티 스택에 대한 설명으로 알맞은 것은?",
    options: ["액티비티가 실행된 순서와 뒤로가기 흐름을 관리한다", "오디오 파일의 앨범명을 저장한다", "권한 요청 창을 만드는 클래스이다", "시스템 알림음을 설정하는 기능이다"],
    answer: 0, explanation: "Activity Stack은 Activity 실행 순서와 뒤로가기 동작을 관리합니다."
  },
  {
    id: "ac21", type: "choice", topic: "Activity Flag",
    prompt: "FLAG_ACTIVITY_SINGLE_TOP의 특징은?",
    options: ["액티비티 사용 기록을 남기지 않는다", "기존 액티비티를 가장 앞으로 가져온다", "스택 맨 위에 같은 액티비티가 있으면 재사용한다", "모든 액티비티를 종료한다"],
    answer: 2, explanation: "스택 최상단에 대상 Activity가 이미 있으면 새 인스턴스를 만들지 않습니다."
  },
  {
    id: "ac22", type: "choice", topic: "Activity Flag",
    prompt: "FLAG_ACTIVITY_NO_HISTORY의 특징은?",
    options: ["액티비티 사용 기록을 남기지 않는다", "기존 액티비티 위의 모든 액티비티를 제거한다", "기존 액티비티를 가장 앞으로 가져온다", "앱을 자동으로 재시작한다"],
    answer: 0, explanation: "NO_HISTORY Activity는 다른 화면으로 이동한 뒤 스택에 남지 않습니다."
  },
  {
    id: "ac23", type: "choice", topic: "Activity Flag",
    prompt: "FLAG_ACTIVITY_REORDER_TO_FRONT의 특징은?",
    options: ["기존 액티비티를 가장 앞으로 가져온다", "앱의 알림 채널을 생성한다", "권한 요청을 수행한다", "브로드캐스트를 차단한다"],
    answer: 0, explanation: "스택에 있는 기존 Activity 인스턴스를 최상단으로 이동시킵니다."
  },
  {
    id: "ac24", type: "choice", topic: "Activity Flag",
    prompt: "FLAG_ACTIVITY_CLEAR_TOP의 특징은?",
    options: ["액티비티가 존재하면 그 위의 액티비티를 모두 제거한다", "액티비티를 무조건 새로 생성한다", "오디오 파일 목록을 정렬한다", "시스템 시간을 변경한다"],
    answer: 0, explanation: "대상 Activity 위에 쌓인 Activity를 제거하고 대상을 앞으로 가져옵니다."
  },
  {
    id: "ac25", type: "choice", topic: "Notification",
    prompt: "알림(Notification)의 목적은?",
    options: ["시스템이 사용자에게 특정 정보를 알려주기 위해 사용한다", "앱의 내부 DB를 외부에 공개하기 위해 사용한다", "액티비티 스택을 초기화하기 위해 사용한다", "버튼 클릭 이벤트만 처리하기 위해 사용한다"],
    answer: 0, explanation: "Notification은 앱이 사용자에게 중요한 정보나 상태를 알려주는 수단입니다."
  },
  {
    id: "ac26", type: "choice", topic: "Notification",
    prompt: "알림을 관리하기 위해 사용하는 클래스는?",
    options: ["NotificationManager", "ContentResolver", "Cursor", "BroadcastReceiver"],
    answer: 0, explanation: "NotificationManager가 알림 표시와 취소 등을 관리합니다."
  },
  {
    id: "ac27", type: "choice", topic: "Notification",
    prompt: "NotificationManager 객체를 얻을 때 사용하는 대표 메소드는?",
    options: ["getSystemService()", "getColumnIndexOrThrow()", "moveToFirst()", "onReceive()"],
    answer: 0, explanation: "시스템 서비스인 NotificationManager는 getSystemService()로 얻습니다."
  },
  {
    id: "ac28", type: "choice", topic: "Notification",
    prompt: "NotificationManager에서 실제 알림을 표시할 때 사용하는 메소드는?",
    options: ["query()", "notify()", "finish()", "registerReceiver()"],
    answer: 1, explanation: "NotificationManager.notify()로 알림을 사용자에게 표시합니다."
  },
  {
    id: "ac29", type: "choice", topic: "Notification",
    prompt: "안드로이드 8.0 이상에서 알림 기능과 관련하여 중요하게 추가된 개념은?",
    options: ["NotificationChannel", "Cursor", "Content URI", "ACTION_BOOT_COMPLETED"],
    answer: 0, explanation: "Android 8.0 이상에서는 알림을 NotificationChannel에 연결해야 합니다."
  },
  {
    id: "ac30", type: "choice", topic: "Notification",
    prompt: "알림을 눌렀을 때 특정 Activity로 이동시키기 위해 주로 사용하는 것은?",
    options: ["PendingIntent", "Cursor", "UserDictionary", "IntentFilter만 단독 사용"],
    answer: 0, explanation: "PendingIntent는 알림 클릭 시 나중에 실행할 작업을 지정합니다."
  },
  {
    id: "as1", type: "short", topic: "Content Provider",
    prompt: "컨텐트 프로바이더가 필요한 이유를 설명하세요.",
    keywords: ["데이터", "공유"], displayAnswer: "앱 데이터를 다른 앱과 안전하게 공유하기 위해 사용합니다.",
    explanation: "연락처, 통화 기록, 미디어처럼 여러 앱이 함께 사용하는 데이터를 안전하게 공유합니다."
  },
  {
    id: "as2", type: "short", topic: "Content Provider",
    prompt: "ContentResolver의 역할을 설명하세요.",
    keywords: ["프로바이더", "접근"], displayAnswer: "앱이 URI를 이용해 컨텐트 프로바이더에 접근하고 데이터를 조회하도록 합니다.",
    explanation: "ContentResolver는 query() 등을 통해 프로바이더와 앱 사이의 데이터 접근을 중개합니다."
  },
  {
    id: "as3", type: "short", topic: "Content Provider",
    prompt: "컨텐트 프로바이더 URI가 필요한 이유를 설명하세요.",
    keywords: ["주소", "데이터"], displayAnswer: "어떤 데이터에 접근할 것인지 나타내는 주소 역할을 합니다.",
    explanation: "URI는 프로바이더와 그 안의 데이터 위치를 식별합니다."
  },
  {
    id: "as4", type: "short", topic: "Cursor",
    prompt: "Cursor 객체의 역할을 설명하세요.",
    keywords: ["query", "데이터"], displayAnswer: "query() 결과 데이터 집합을 행 단위로 이동하며 읽는 객체입니다.",
    explanation: "Cursor는 moveToFirst(), moveToNext() 등으로 결과 행을 탐색합니다."
  },
  {
    id: "as5", type: "short", topic: "MediaStore",
    prompt: "MediaStore.Audio.Media 클래스에서 얻을 수 있는 정보 예시를 두 가지 이상 쓰세요.",
    keywordsAny: ["제목", "앨범", "아티스트", "재생시간"], keywordMinimum: 2,
    displayAnswer: "오디오 파일의 제목, 앨범명, 아티스트명, 재생 시간 등",
    explanation: "MediaStore에서 다양한 오디오 메타데이터를 조회할 수 있습니다."
  },
  {
    id: "as6", type: "short", topic: "권한",
    prompt: "안드로이드 6.0 이상에서 권한 처리가 중요한 이유를 설명하세요.",
    keywords: ["실행", "권한"], displayAnswer: "위험 권한은 Manifest 선언 외에 앱 실행 중 사용자에게 권한을 요청해야 합니다.",
    explanation: "Android 6.0부터 위험 권한은 런타임 허용 여부를 확인해야 합니다."
  },
  {
    id: "as7", type: "short", topic: "Content Provider",
    prompt: "CallLog 컨텐트 프로바이더의 용도를 설명하세요.",
    keywords: ["통화", "기록"], displayAnswer: "통화 번호, 종류, 날짜 등의 통화 기록을 조회할 때 사용합니다.",
    explanation: "CallLog는 기기의 통화 내역 데이터에 접근하는 프로바이더입니다."
  },
  {
    id: "as8", type: "short", topic: "Broadcast Receiver",
    prompt: "브로드캐스트 리시버의 개념을 설명하세요.",
    keywords: ["방송", "수신"], displayAnswer: "시스템이나 앱에서 발생한 방송 메시지를 수신하는 컴포넌트입니다.",
    explanation: "부팅 완료, 배터리 변화, 화면 상태 등의 이벤트를 수신할 수 있습니다."
  },
  {
    id: "as9", type: "short", topic: "Broadcast Receiver",
    prompt: "BroadcastReceiver를 구현할 때 onReceive()가 중요한 이유를 설명하세요.",
    keywords: ["수신", "호출"], displayAnswer: "브로드캐스트 메시지를 수신했을 때 자동 호출되어 필요한 동작을 수행합니다.",
    explanation: "onReceive()에서 Intent의 액션을 확인하고 이벤트를 처리합니다."
  },
  {
    id: "as10", type: "short", topic: "Broadcast Receiver",
    prompt: "브로드캐스트 리시버가 사용자와 직접 상호작용하지 않는다는 의미를 설명하세요.",
    keywords: ["UI", "화면"], displayAnswer: "리시버 자체는 사용자가 조작하는 UI 화면을 제공하지 않습니다.",
    explanation: "수신 후 Activity를 실행하거나 알림을 표시하는 방식으로 반응합니다."
  },
  {
    id: "as11", type: "short", topic: "Broadcast Receiver",
    prompt: "ACTION_BOOT_COMPLETED의 의미와 필요한 권한을 설명하세요.",
    keywords: ["부팅", "RECEIVE_BOOT_COMPLETED"], displayAnswer: "장치 부팅 완료 시 발생하며 RECEIVE_BOOT_COMPLETED 권한이 필요합니다.",
    explanation: "부팅 완료 방송을 받으려면 해당 권한을 Manifest에 선언해야 합니다."
  },
  {
    id: "as12", type: "short", topic: "Intent",
    prompt: "인텐트 필터의 역할을 설명하세요.",
    keywords: ["인텐트", "정의"], displayAnswer: "컴포넌트가 받을 수 있는 인텐트나 액션을 정의합니다.",
    explanation: "BroadcastReceiver에서는 받고자 하는 방송 액션을 등록하는 데 사용합니다."
  },
  {
    id: "as13", type: "short", topic: "Task",
    prompt: "태스크(Task)의 개념을 설명하세요.",
    keywords: ["액티비티", "집합"], displayAnswer: "사용자가 하나의 애플리케이션처럼 느끼는 액티비티들의 집합입니다.",
    explanation: "하나의 작업 흐름에는 다른 앱의 Activity도 포함될 수 있습니다."
  },
  {
    id: "as14", type: "short", topic: "Task",
    prompt: "액티비티 스택의 개념을 설명하세요.",
    keywords: ["액티비티", "순서"], displayAnswer: "실행된 액티비티가 쌓이며 실행 순서와 뒤로가기를 관리하는 구조입니다.",
    explanation: "새 Activity는 위에 쌓이고 뒤로가면 최상단 Activity가 제거됩니다."
  },
  {
    id: "as15", type: "short", topic: "Activity Flag",
    prompt: "FLAG_ACTIVITY_SINGLE_TOP을 설명하세요.",
    keywords: ["맨위", "재사용"], displayAnswer: "대상 액티비티가 스택 맨 위에 있으면 새로 만들지 않고 재사용합니다.",
    explanation: "같은 Activity의 불필요한 중복 생성을 막습니다."
  },
  {
    id: "as16", type: "short", topic: "Activity Flag",
    prompt: "FLAG_ACTIVITY_NO_HISTORY를 설명하세요.",
    keywords: ["기록", "남기지"], displayAnswer: "해당 액티비티의 사용 기록을 스택에 남기지 않는 플래그입니다.",
    explanation: "다른 화면으로 이동하면 이전 Activity로 돌아갈 수 없습니다."
  },
  {
    id: "as17", type: "short", topic: "Activity Flag",
    prompt: "FLAG_ACTIVITY_CLEAR_TOP을 설명하세요.",
    keywords: ["위", "제거"], displayAnswer: "대상 액티비티 위에 쌓인 액티비티를 모두 제거하고 대상을 앞으로 가져옵니다.",
    explanation: "스택 안의 기존 대상 Activity로 돌아갈 때 사용합니다."
  },
  {
    id: "as18", type: "short", topic: "Notification",
    prompt: "NotificationManager의 역할을 설명하세요.",
    keywords: ["알림", "표시"], displayAnswer: "알림을 생성하고 notify()로 사용자에게 표시하는 관리자 클래스입니다.",
    explanation: "getSystemService()로 얻어 알림을 표시하거나 취소합니다."
  },
  {
    id: "as19", type: "short", topic: "Notification",
    prompt: "안드로이드 8.0 이상에서 NotificationChannel이 필요한 이유를 설명하세요.",
    keywords: ["알림", "채널"], displayAnswer: "알림의 종류, 중요도, 표시 방식 등을 채널별로 관리하기 위해 필요합니다.",
    explanation: "Android 8.0 이상에서 알림은 반드시 채널에 연결해야 합니다."
  },
  {
    id: "as20", type: "short", topic: "Notification",
    prompt: "PendingIntent가 알림에서 사용되는 이유를 설명하세요.",
    keywords: ["알림", "클릭", "실행"], displayAnswer: "알림을 클릭했을 때 나중에 실행할 Activity 등의 작업을 미리 지정하기 위해 사용합니다.",
    explanation: "PendingIntent는 다른 프로세스가 앱을 대신해 지정 작업을 실행할 수 있게 합니다."
  }
];
