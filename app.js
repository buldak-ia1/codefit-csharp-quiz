const TYPES = {
  choice: {
    label: "객관식",
    description: "보기에서 정답 고르기",
    icon: "A",
    kind: "choice",
    color: "#4773e8",
    soft: "#edf2ff"
  },
  short: {
    label: "주관식",
    description: "핵심 용어 직접 입력",
    icon: "T",
    kind: "short",
    color: "#2fa978",
    soft: "#eaf8f2"
  },
  blank: {
    label: "빈칸",
    description: "코드의 빈칸 완성하기",
    icon: "_",
    kind: "blank",
    color: "#8158d8",
    soft: "#f2edfc"
  },
  coding: {
    label: "코딩",
    description: "조건에 맞는 코드 작성",
    icon: "</>",
    kind: "coding",
    color: "#ff6f4d",
    soft: "#fff0eb"
  },
  basic_choice: {
    label: "기본_객관식",
    description: "기본 개념 보기 선택",
    icon: "기본A",
    kind: "choice",
    color: "#5d7ce8",
    soft: "#eef3ff"
  },
  basic_short: {
    label: "기본_주관식",
    description: "기본 용어 직접 입력",
    icon: "기본T",
    kind: "short",
    color: "#20a38f",
    soft: "#e8f8f5"
  },
  basic_blank: {
    label: "기본_빈칸",
    description: "기본 구문 빈칸 채우기",
    icon: "기본_",
    kind: "blank",
    color: "#9a65d8",
    soft: "#f4edfc"
  },
  basic_coding: {
    label: "기본_코딩",
    description: "기본 코드와 계산 연습",
    icon: "기본</>",
    kind: "coding",
    color: "#8a63ff",
    soft: "#f3efff"
  },
  confirm_choice: {
    label: "확인_객관식",
    description: "확인 문제 35개 랜덤",
    icon: "확인A",
    kind: "choice",
    sessionSize: 35,
    color: "#db6d2f",
    soft: "#fff0e7"
  },
  capstone_confirm_choice: {
    label: "확인_객관식",
    description: "확인 문제 30개 랜덤",
    icon: "확인A",
    kind: "choice",
    sessionSize: 30,
    color: "#2e9ccf",
    soft: "#eaf7fd"
  },
  capstone_practice_choice: {
    label: "실전_객관식",
    description: "실전 보기 선택",
    icon: "실전A",
    kind: "choice",
    color: "#1e7cc4",
    soft: "#e9f4fc"
  },
  capstone_practice_short: {
    label: "실전_단답형",
    description: "실전 핵심 답안 입력",
    icon: "실전T",
    kind: "short",
    color: "#2fa978",
    soft: "#eaf8f2"
  },
  capstone_practice_essay: {
    label: "실전_서술형",
    description: "실전 사례 답안 작성",
    icon: "실전S",
    kind: "short",
    color: "#8158d8",
    soft: "#f2edfc"
  }
};

const QUESTIONS = [
  {
    id: "c1",
    type: "choice",
    topic: "데이터베이스",
    prompt: "C#에서 SQL Server 데이터베이스에 연결할 때 주로 사용하는 클래스는?",
    options: ["SqlCommand", "SqlConnection", "SqlDataReader", "SqlAdapter"],
    answer: 1,
    explanation: "SqlConnection은 애플리케이션과 SQL Server 사이의 연결을 생성하고 관리합니다."
  },
  {
    id: "c2",
    type: "choice",
    topic: "데이터베이스",
    prompt: "INSERT, UPDATE, DELETE처럼 결과 테이블을 반환하지 않는 SQL 실행에 주로 사용하는 메서드는?",
    options: ["ExecuteReader()", "ExecuteNonQuery()", "ShowDialog()", "Start()"],
    answer: 1,
    explanation: "ExecuteNonQuery()는 영향받은 행 수를 반환하며 데이터 변경 명령에 사용합니다."
  },
  {
    id: "c3",
    type: "choice",
    topic: "DLL",
    prompt: "C#에서 외부 DLL 함수를 가져올 때 사용하는 특성(Attribute)은?",
    options: ["[Serializable]", "[DllImport]", "[ThreadStart]", "[Override]"],
    answer: 1,
    explanation: "[DllImport]를 사용하면 네이티브 DLL의 함수를 C#에서 호출할 수 있습니다."
  },
  {
    id: "c4",
    type: "choice",
    topic: "DLL",
    prompt: "[DllImport]를 사용하기 위해 필요한 네임스페이스는?",
    options: ["System.IO", "System.Threading", "System.Runtime.InteropServices", "System.Windows.Forms"],
    answer: 2,
    explanation: "DllImportAttribute는 System.Runtime.InteropServices 네임스페이스에 있습니다."
  },
  {
    id: "c5",
    type: "choice",
    topic: "스레드",
    prompt: "새로 만든 스레드를 시작하는 메서드는?",
    options: ["Run()", "Open()", "Start()", "ShowDialog()"],
    answer: 2,
    explanation: "Thread 인스턴스의 Start()를 호출하면 등록된 작업이 새 스레드에서 시작됩니다."
  },
  {
    id: "c6",
    type: "choice",
    topic: "스레드",
    prompt: "Thread.Sleep(100);의 의미로 올바른 것은?",
    options: ["프로그램을 100초 뒤 종료한다", "현재 스레드를 100밀리초 멈춘다", "파일 100개를 저장한다", "DB 연결을 100번 수행한다"],
    answer: 1,
    explanation: "Thread.Sleep의 인자는 밀리초이며 현재 실행 중인 스레드를 잠시 멈춥니다."
  },
  {
    id: "c7",
    type: "choice",
    topic: "FileDialog",
    prompt: "OpenFileDialog에서 여러 파일을 선택할 수 있게 하는 속성은?",
    options: ["Multiselect", "ShowReadOnly", "InitialDirectory", "Filter"],
    answer: 0,
    explanation: "Multiselect를 true로 설정하면 사용자가 여러 파일을 선택할 수 있습니다."
  },
  {
    id: "c8",
    type: "choice",
    topic: "윈도우 폼",
    prompt: "창을 모달 방식으로 열 때 사용하는 메서드는?",
    options: ["Show()", "ShowDialog()", "Start()", "ExecuteReader()"],
    answer: 1,
    explanation: "ShowDialog()는 열린 창을 닫을 때까지 기존 창의 조작을 막는 모달 방식입니다."
  },
  {
    id: "c9",
    type: "choice",
    topic: "데이터베이스",
    prompt: "데이터베이스 연결 문자열에 일반적으로 포함되지 않는 것은?",
    options: ["서버 주소", "데이터베이스 이름", "사용자 ID와 비밀번호", "버튼의 위치 좌표"],
    answer: 3,
    explanation: "연결 문자열에는 서버와 인증 정보 등이 들어가며 UI 버튼 좌표는 관련이 없습니다."
  },
  {
    id: "c10",
    type: "choice",
    topic: "DLL",
    prompt: "C++ DLL에서 함수를 외부로 공개할 때 사용하는 키워드는?",
    options: ["private", "__declspec(dllexport)", "using", "namespace"],
    answer: 1,
    explanation: "__declspec(dllexport)는 DLL의 함수를 외부에서 호출할 수 있도록 내보냅니다."
  },
  {
    id: "c11",
    type: "choice",
    topic: "델리게이트",
    prompt: "델리게이트에 대한 설명으로 올바른 것은?",
    options: ["파일을 저장하는 클래스이다", "메서드를 참조하고 호출할 수 있는 대리자이다", "DB 연결 문자열이다", "창에 글을 출력하는 메서드이다"],
    answer: 1,
    explanation: "델리게이트는 메서드의 참조를 보관하고 나중에 간접 호출할 수 있습니다."
  },
  {
    id: "c12",
    type: "choice",
    topic: "델리게이트",
    prompt: "델리게이트 선언 형식으로 올바른 것은?",
    options: ["delegate void MyDel(int n);", "void delegate MyDel(int n);", "class delegate MyDel;", "MyDel delegate void(int n);"],
    answer: 0,
    explanation: "반환형 앞에 delegate 키워드를 붙여 델리게이트 형식을 선언합니다."
  },
  {
    id: "c13",
    type: "choice",
    topic: "델리게이트",
    prompt: "다음 코드에서 d(10);의 의미는?",
    code: "delegate void Dele(int n);\nDele d = methodA;\nd(10);",
    options: ["d라는 파일을 연다", "methodA를 델리게이트를 통해 호출한다", "스레드를 종료한다", "창을 연다"],
    answer: 1,
    explanation: "d가 methodA를 참조하므로 d(10)은 methodA(10)을 간접 호출합니다."
  },
  {
    id: "c14",
    type: "choice",
    topic: "스레드",
    prompt: "스레드에 매개변수 7을 전달하는 올바른 방식은?",
    options: ["new Thread(Func(7))", "myThread.Start(7)", "Thread.Sleep(Func)", "myThread.Join(7)"],
    answer: 1,
    explanation: "ParameterizedThreadStart를 사용하는 스레드는 Start(value)로 값을 전달할 수 있습니다."
  },
  {
    id: "c15",
    type: "choice",
    topic: "스레드",
    prompt: "Join() 메서드의 역할로 올바른 것은?",
    options: ["다른 스레드가 끝날 때까지 기다린다", "스레드를 즉시 삭제한다", "파일 이름을 가져온다", "창을 모달리스로 연다"],
    answer: 0,
    explanation: "Join()은 대상 스레드가 종료될 때까지 현재 스레드를 대기시킵니다."
  },
  {
    id: "c16",
    type: "choice",
    topic: "FileDialog",
    prompt: "OpenFileDialog에서 사용자가 파일 선택을 완료했는지 확인하는 조건은?",
    options: ["ShowDialog() == DialogResult.OK", "Start() == true", "FileName == null", "Join() == OK"],
    answer: 0,
    explanation: "ShowDialog()의 반환값이 DialogResult.OK인지 확인합니다."
  },
  {
    id: "c17",
    type: "choice",
    topic: "윈도우 폼",
    prompt: "모달리스 창에 대한 설명으로 올바른 것은?",
    options: ["창을 닫기 전까지 기존 창을 사용할 수 없다", "창이 떠 있어도 기존 창을 계속 사용할 수 있다", "반드시 DB 연결이 필요하다", "파일 저장 전용 창이다"],
    answer: 1,
    explanation: "모달리스 창은 열린 상태에서도 다른 창과 상호작용할 수 있습니다."
  },
  {
    id: "c18",
    type: "choice",
    topic: "DLL",
    prompt: "DLL 사용의 장점으로 가장 알맞은 것은?",
    options: ["항상 실행 파일을 더 크게 만든다", "외부 기능을 여러 프로그램에서 재사용할 수 있다", "C#에서만 사용할 수 있다", "파일 저장을 막는다"],
    answer: 1,
    explanation: "공통 기능을 DLL로 분리하면 여러 프로그램에서 재사용하고 독립적으로 관리할 수 있습니다."
  },
  {
    id: "c19",
    type: "choice",
    topic: "델리게이트",
    prompt: "델리게이트를 사용하는 이유로 가장 알맞은 것은?",
    options: ["메서드를 간접 호출하고 교체하기 위해", "파일을 강제로 삭제하기 위해", "DB 연결을 자동 종료하기 위해", "스레드를 항상 종료하기 위해"],
    answer: 0,
    explanation: "델리게이트를 사용하면 호출할 메서드를 유연하게 전달하고 교체할 수 있습니다."
  },
  {
    id: "c20",
    type: "choice",
    topic: "윈도우 폼",
    prompt: "모달과 모달리스 창을 여는 메서드 조합으로 올바른 것은?",
    options: ["모달 Show(), 모달리스 ShowDialog()", "모달 ShowDialog(), 모달리스 Show()", "모달 Start(), 모달리스 Join()", "둘 다 Open()"],
    answer: 1,
    explanation: "모달은 ShowDialog(), 모달리스는 Show()로 엽니다."
  },
  {
    id: "s1",
    type: "short",
    topic: "데이터베이스",
    prompt: "데이터베이스 연결을 실제로 여는 메서드는 무엇인가요?",
    answers: ["open", "open()"],
    displayAnswer: "Open()",
    explanation: "SqlConnection 객체를 만든 후 Open()을 호출해 실제 연결을 엽니다."
  },
  {
    id: "s2",
    type: "short",
    topic: "데이터베이스",
    prompt: "SELECT 결과를 한 줄씩 읽을 때 사용하는 클래스는 무엇인가요?",
    answers: ["sqldatareader"],
    displayAnswer: "SqlDataReader",
    explanation: "SqlDataReader는 ExecuteReader()가 반환한 결과를 순차적으로 읽습니다."
  },
  {
    id: "s3",
    type: "short",
    topic: "델리게이트",
    prompt: "C#에서 메서드를 참조하고 호출할 수 있는 대리자를 무엇이라고 하나요?",
    answers: ["delegate", "델리게이트"],
    displayAnswer: "delegate(델리게이트)",
    explanation: "델리게이트는 특정 시그니처를 가진 메서드를 참조하는 형식입니다."
  },
  {
    id: "s4",
    type: "short",
    topic: "스레드",
    prompt: "다른 스레드가 끝날 때까지 현재 스레드를 기다리게 하는 메서드는?",
    answers: ["join", "join()"],
    displayAnswer: "Join()",
    explanation: "Join()은 대상 스레드가 종료될 때까지 현재 스레드의 실행을 대기시킵니다."
  },
  {
    id: "s5",
    type: "short",
    topic: "FileDialog",
    prompt: "OpenFileDialog에서 선택한 파일 하나의 경로를 가져오는 속성은?",
    answers: ["filename"],
    displayAnswer: "FileName",
    explanation: "하나의 경로는 FileName, 여러 경로는 FileNames 속성으로 가져옵니다."
  },
  {
    id: "s6",
    type: "short",
    topic: "윈도우 폼",
    prompt: "창을 모달리스 방식으로 열 때 사용하는 메서드는?",
    answers: ["show", "show()"],
    displayAnswer: "Show()",
    explanation: "Show()로 연 창은 열려 있어도 기존 창을 계속 조작할 수 있습니다."
  },
  {
    id: "s7",
    type: "short",
    topic: "데이터베이스",
    prompt: "데이터베이스 연결을 닫는 메서드는 무엇인가요?",
    answers: ["close", "close()"],
    displayAnswer: "Close()",
    explanation: "사용한 연결은 Close()를 호출하거나 using 문으로 정리합니다."
  },
  {
    id: "s8",
    type: "short",
    topic: "데이터베이스",
    prompt: "SQL 명령문을 실행할 때 사용하는 클래스는 무엇인가요?",
    answers: ["sqlcommand"],
    displayAnswer: "SqlCommand",
    explanation: "SqlCommand는 연결을 이용해 SELECT, INSERT 등의 SQL 명령을 실행합니다."
  },
  {
    id: "s9",
    type: "short",
    topic: "DLL",
    prompt: "외부 DLL 함수를 C#에서 사용할 때 붙이는 특성은 무엇인가요?",
    answers: ["dllimport", "[dllimport]"],
    displayAnswer: "[DllImport]",
    explanation: "DllImport 특성으로 네이티브 DLL 함수의 위치를 지정합니다."
  },
  {
    id: "s10",
    type: "short",
    topic: "DLL",
    prompt: "DllImport를 사용하기 위해 필요한 네임스페이스는 무엇인가요?",
    answers: ["system.runtime.interopservices"],
    displayAnswer: "System.Runtime.InteropServices",
    explanation: "DllImportAttribute는 System.Runtime.InteropServices에 정의되어 있습니다."
  },
  {
    id: "s11",
    type: "short",
    topic: "DLL",
    prompt: "C++ DLL에서 함수를 외부로 내보낼 때 사용하는 키워드는?",
    answers: ["__declspec(dllexport)", "declspec(dllexport)"],
    displayAnswer: "__declspec(dllexport)",
    explanation: "이 키워드는 C++ 함수가 DLL 외부에서 보이도록 내보냅니다."
  },
  {
    id: "s12",
    type: "short",
    topic: "델리게이트",
    prompt: "델리게이트를 통해 작업 진행 상황을 외부 메서드로 전달하는 방식을 무엇이라고 하나요?",
    answers: ["callback", "콜백"],
    displayAnswer: "Callback(콜백)",
    explanation: "콜백은 작업 중 특정 시점에 전달받은 메서드를 다시 호출하는 방식입니다."
  },
  {
    id: "s13",
    type: "short",
    topic: "스레드",
    prompt: "스레드를 만들 때 사용하는 대표 클래스는 무엇인가요?",
    answers: ["thread"],
    displayAnswer: "Thread",
    explanation: "System.Threading의 Thread 클래스로 새 스레드를 만들 수 있습니다."
  },
  {
    id: "s14",
    type: "short",
    topic: "스레드",
    prompt: "현재 스레드를 일정 시간 멈추는 메서드는 무엇인가요?",
    answers: ["thread.sleep", "thread.sleep()", "sleep", "sleep()"],
    displayAnswer: "Thread.Sleep()",
    explanation: "Thread.Sleep(milliseconds)는 현재 스레드를 지정 시간 동안 멈춥니다."
  },
  {
    id: "s15",
    type: "short",
    topic: "FileDialog",
    prompt: "파일 열기 대화상자를 제공하는 클래스는 무엇인가요?",
    answers: ["openfiledialog"],
    displayAnswer: "OpenFileDialog",
    explanation: "OpenFileDialog는 사용자가 열 파일을 선택할 수 있는 대화상자입니다."
  },
  {
    id: "s16",
    type: "short",
    topic: "FileDialog",
    prompt: "파일 저장 대화상자를 제공하는 클래스는 무엇인가요?",
    answers: ["savefiledialog"],
    displayAnswer: "SaveFileDialog",
    explanation: "SaveFileDialog는 저장할 경로와 파일명을 선택하게 합니다."
  },
  {
    id: "s17",
    type: "short",
    topic: "FileDialog",
    prompt: "OpenFileDialog에서 선택한 여러 파일 경로를 가져오는 속성은?",
    answers: ["filenames"],
    displayAnswer: "FileNames",
    explanation: "여러 파일의 경로는 FileNames 배열로 가져옵니다."
  },
  {
    id: "b1",
    type: "blank",
    topic: "데이터베이스",
    prompt: "데이터베이스 연결을 여는 코드를 완성하세요.",
    code: "SqlConnection conn = new SqlConnection(connStr);\nconn._____();",
    answers: ["open", "open()"],
    displayAnswer: "Open",
    explanation: "연결 객체의 Open() 메서드를 호출합니다."
  },
  {
    id: "b2",
    type: "blank",
    topic: "DLL",
    prompt: "외부 DLL 함수를 선언하는 코드를 완성하세요.",
    code: "[_____(\"mydll.dll\")]\npublic static extern int add(int a, int b);",
    answers: ["dllimport"],
    displayAnswer: "DllImport",
    explanation: "DllImport 특성에 DLL 파일명을 전달해 외부 함수를 선언합니다."
  },
  {
    id: "b3",
    type: "blank",
    topic: "델리게이트",
    prompt: "델리게이트를 선언하는 키워드를 입력하세요.",
    code: "_____ void MyDel(int n);",
    answers: ["delegate"],
    displayAnswer: "delegate",
    explanation: "델리게이트 선언은 delegate 키워드로 시작합니다."
  },
  {
    id: "b4",
    type: "blank",
    topic: "스레드",
    prompt: "스레드를 실행하는 코드를 완성하세요.",
    code: "Thread t = new Thread(Work);\nt._____();",
    answers: ["start", "start()"],
    displayAnswer: "Start",
    explanation: "생성한 스레드는 Start()를 호출해 실행합니다."
  },
  {
    id: "b5",
    type: "blank",
    topic: "FileDialog",
    prompt: "파일 선택을 완료했는지 확인하는 코드를 완성하세요.",
    code: "if (ofd.ShowDialog() == DialogResult._____)\n{\n    Console.WriteLine(ofd.FileName);\n}",
    answers: ["ok"],
    displayAnswer: "OK",
    explanation: "사용자가 확인 버튼을 누르면 DialogResult.OK가 반환됩니다."
  },
  {
    id: "p1",
    type: "coding",
    topic: "데이터베이스",
    prompt: "SqlConnection을 사용해 연결을 열고 닫는 코드를 작성하세요.",
    hint: "connStr 변수와 Open(), Close()를 모두 사용하세요.",
    required: ["SqlConnection", "connStr", ".Open(", ".Close("],
    sample: "string connStr = \"Server=localhost;Database=TestDB;\";\nSqlConnection conn = new SqlConnection(connStr);\nconn.Open();\nconn.Close();",
    explanation: "연결 문자열로 SqlConnection을 만들고 Open()과 Close()를 순서대로 호출해야 합니다."
  },
  {
    id: "p2",
    type: "coding",
    topic: "데이터베이스",
    prompt: "Student 테이블을 조회하고 Name 열을 출력하는 핵심 코드를 작성하세요.",
    hint: "SqlCommand, ExecuteReader(), reader[\"Name\"]을 사용하세요.",
    required: ["SqlCommand", "SELECT", "ExecuteReader", "reader[\"Name\"]"],
    sample: "string sql = \"SELECT * FROM Student\";\nSqlCommand cmd = new SqlCommand(sql, conn);\nSqlDataReader reader = cmd.ExecuteReader();\nwhile (reader.Read())\n    Console.WriteLine(reader[\"Name\"]);",
    explanation: "SELECT 명령을 SqlCommand로 실행하고 SqlDataReader로 결과를 읽습니다."
  },
  {
    id: "p3",
    type: "coding",
    topic: "DLL",
    prompt: "mydll.dll의 add(int a, int b) 함수를 C#에서 선언하는 코드를 작성하세요.",
    hint: "DllImport와 extern을 사용하세요.",
    required: ["DllImport", "mydll.dll", "extern", "add", "int a", "int b"],
    sample: "[DllImport(\"mydll.dll\")]\npublic static extern int add(int a, int b);",
    explanation: "DllImport 특성과 extern 키워드로 네이티브 DLL 함수를 선언합니다."
  },
  {
    id: "p4",
    type: "coding",
    topic: "스레드",
    prompt: "Work 메서드를 실행하는 스레드를 만들고 시작하는 코드를 작성하세요.",
    hint: "Thread 객체 생성과 Start() 호출이 필요합니다.",
    required: ["new Thread", "Work", ".Start("],
    sample: "Thread t = new Thread(Work);\nt.Start();",
    explanation: "실행할 메서드를 Thread 생성자에 전달한 뒤 Start()를 호출합니다."
  },
  {
    id: "p6",
    type: "coding",
    topic: "데이터베이스",
    prompt: "Student 테이블의 Name 열에 값을 추가하는 INSERT 코드를 작성하세요.",
    hint: "SqlCommand와 ExecuteNonQuery()를 사용하세요.",
    required: ["INSERT INTO Student", "Name", "SqlCommand", "ExecuteNonQuery"],
    sample: "string sql = \"INSERT INTO Student(Name) VALUES('홍길동')\";\nSqlCommand cmd = new SqlCommand(sql, conn);\nint result = cmd.ExecuteNonQuery();",
    explanation: "INSERT 문은 SqlCommand로 만든 뒤 ExecuteNonQuery()로 실행합니다."
  },
  {
    id: "p7",
    type: "coding",
    topic: "델리게이트",
    prompt: "정수 두 개를 받아 더한 값을 출력하는 Calc 델리게이트와 Add 메서드를 작성하세요.",
    hint: "delegate, Calc, Add를 모두 사용하세요.",
    required: ["delegate", "Calc", "Add", "a + b"],
    sample: "delegate void Calc(int a, int b);\n\nstatic void Add(int a, int b)\n{\n    Console.WriteLine(a + b);\n}\n\nCalc c = Add;\nc(10, 20);",
    explanation: "델리게이트의 매개변수 형식과 연결할 메서드의 시그니처가 일치해야 합니다."
  },
  {
    id: "p8",
    type: "coding",
    topic: "델리게이트",
    prompt: "10, 20, 30의 진행률을 전달하는 Progress 콜백 코드를 작성하세요.",
    hint: "Progress 델리게이트와 Work 메서드를 사용하세요.",
    required: ["delegate", "Progress", "Work", "p(10)", "p(20)", "p(30)"],
    sample: "delegate void Progress(int percent);\n\nstatic void Work(Progress p)\n{\n    p(10);\n    p(20);\n    p(30);\n}",
    explanation: "Work 메서드가 전달받은 Progress 콜백을 각 진행 시점에 호출합니다."
  },
  {
    id: "p9",
    type: "coding",
    topic: "스레드",
    prompt: "스레드에 숫자 100을 전달해 출력하는 코드를 작성하세요.",
    hint: "object 매개변수와 Start(100)을 사용하세요.",
    required: ["object", "new Thread", "Start(100)"],
    sample: "static void PrintNumber(object num)\n{\n    Console.WriteLine(num);\n}\n\nThread t = new Thread(PrintNumber);\nt.Start(100);",
    explanation: "매개변수를 받는 메서드를 등록하고 Start(value)로 값을 전달할 수 있습니다."
  },
  {
    id: "p10",
    type: "coding",
    topic: "FileDialog",
    prompt: "OpenFileDialog를 열고 선택한 파일 경로를 출력하는 코드를 작성하세요.",
    hint: "ShowDialog(), DialogResult.OK, FileName을 사용하세요.",
    required: ["OpenFileDialog", "ShowDialog", "DialogResult.OK", "FileName"],
    sample: "OpenFileDialog ofd = new OpenFileDialog();\nif (ofd.ShowDialog() == DialogResult.OK)\n{\n    Console.WriteLine(ofd.FileName);\n}",
    explanation: "대화상자의 결과가 OK인지 확인한 뒤 FileName으로 선택 경로를 가져옵니다."
  },
  {
    id: "p5",
    type: "coding",
    topic: "윈도우 폼",
    prompt: "Form2를 각각 모달과 모달리스 방식으로 여는 코드를 작성하세요.",
    hint: "ShowDialog()와 Show()를 모두 사용하세요.",
    required: ["Form2", "new Form2", ".ShowDialog(", ".Show("],
    sample: "Form2 modal = new Form2();\nmodal.ShowDialog();\n\nForm2 modeless = new Form2();\nmodeless.Show();",
    explanation: "ShowDialog()는 모달, Show()는 모달리스 방식으로 창을 엽니다."
  }
];

const SUBJECTS = {
  csharp: {
    label: "C#",
    mark: "C#",
    color: "#ff6f4d",
    questions: [...QUESTIONS, ...(globalThis.CSHARP_NEW_QUESTIONS || [])],
    eyebrow: "C# 핵심 개념 트레이닝",
    title: "오늘도 한 문제씩,<br><em>실력은 선명하게.</em>",
    description: "객관식부터 코딩까지 원하는 방식으로 연습하세요.",
    mix: "객관식 · 주관식 · 빈칸 · 코딩 중 랜덤 10문제"
  },
  android: {
    label: "안드로이드",
    mark: "A",
    color: "#3da55d",
    questions: globalThis.ANDROID_QUESTIONS,
    eyebrow: "ANDROID 핵심 개념 트레이닝",
    title: "앱의 동작 원리,<br><em>문제로 익혀보세요.</em>",
    description: "C# 문제와 분리된 안드로이드 전용 문제 모드입니다.",
    mix: "객관식 · 주관식 중 랜덤 10문제"
  },
  system: {
    label: "시스템소프트웨어실습",
    mark: "SW",
    color: "#6f63ff",
    questions: [
      ...(globalThis.SYSTEM_SOFTWARE_QUESTIONS || []),
      ...(globalThis.SYSTEM_SOFTWARE_CONFIRM_QUESTIONS || [])
    ],
    eyebrow: "시스템소프트웨어실습 예상문제",
    title: "패턴부터 테스트까지,<br><em>핵심만 빠르게.</em>",
    description: "기존 문제와 분리된 시스템소프트웨어실습 전용 문제 모드입니다.",
    mix: "객관식 · 주관식 · 코딩 · 기본_* · 확인_* 중 랜덤 10문제"
  },
  capstone: {
    label: "캡스톤디자인",
    mark: "CD",
    color: "#2e9ccf",
    questions: [
      ...(globalThis.CAPSTONE_CONFIRM_QUESTIONS || []),
      ...(globalThis.CAPSTONE_PRACTICE_QUESTIONS || [])
    ],
    eyebrow: "캡스톤디자인 개념 확인",
    title: "계약부터 발표까지,<br><em>흐름을 잡아보세요.</em>",
    description: "캡스톤디자인 전용 확인·실전 문제 모드입니다.",
    mix: "확인_객관식 · 실전_* 중 랜덤 10문제"
  }
};

const STORAGE_PREFIX = "codefit-progress-v2";
const SUBJECT_KEY = "codefit-active-subject";
const app = document.querySelector("#app");
let state = {
  view: "home",
  subject: ["csharp", "android", "system", "capstone"].includes(new URLSearchParams(window.location.search).get("subject"))
    ? new URLSearchParams(window.location.search).get("subject")
    : localStorage.getItem(SUBJECT_KEY) || "csharp",
  queue: [],
  index: 0,
  answers: [],
  checked: false,
  selected: null,
  modeLabel: ""
};

function getSubject() {
  return SUBJECTS[state.subject] || SUBJECTS.csharp;
}

function getQuestions() {
  return getSubject().questions;
}

function getTypeMeta(type) {
  return TYPES[type] || TYPES.short;
}

function getTypeKind(question) {
  return getTypeMeta(question.type).kind || question.type;
}

function loadProgress() {
  try {
    const current = localStorage.getItem(`${STORAGE_PREFIX}-${state.subject}`);
    const legacy = state.subject === "csharp" ? localStorage.getItem("codefit-progress-v1") : null;
    return JSON.parse(current || legacy) || { solved: 0, correct: 0, history: [] };
  } catch {
    return { solved: 0, correct: 0, history: [] };
  }
}

function saveProgress(progress) {
  localStorage.setItem(`${STORAGE_PREFIX}-${state.subject}`, JSON.stringify(progress));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[;`]/g, "");
}

function renderHome() {
  state.view = "home";
  const template = document.querySelector("#homeTemplate");
  app.replaceChildren(template.content.cloneNode(true));
  const subject = getSubject();
  const questions = getQuestions();

  document.querySelector(".brand-mark").textContent = subject.mark;
  app.querySelectorAll("[data-action='select-subject']").forEach((button) => {
    const isActive = button.dataset.subject === state.subject;
    button.classList.toggle("active", isActive);
    button.style.setProperty("--subject-color", SUBJECTS[button.dataset.subject].color);
    button.setAttribute("aria-pressed", String(isActive));
  });
  app.querySelector('[data-subject-copy="eyebrow"]').textContent = subject.eyebrow;
  app.querySelector('[data-subject-copy="title"]').innerHTML = subject.title;
  app.querySelector('[data-subject-copy="description"]').textContent = subject.description;
  app.querySelector('[data-subject-copy="mix"]').textContent = subject.mix;

  const progress = loadProgress();
  const accuracy = progress.solved ? Math.round((progress.correct / progress.solved) * 100) : 0;
  app.querySelector('[data-stat="solved"]').textContent = progress.solved;
  app.querySelector('[data-stat="accuracy"]').textContent = `${accuracy}%`;
  app.querySelector('[data-stat="message"]').textContent =
    accuracy >= 80 ? "좋은 흐름이에요. 계속 이어가세요." :
    progress.solved ? "오답을 다시 보면 더 단단해져요." : "첫 문제를 풀어보세요.";

  const typeGrid = app.querySelector("#typeGrid");
  Object.entries(TYPES).forEach(([key, type]) => {
    const count = questions.filter((question) => question.type === key).length;
    if (!count) return;
    const card = document.createElement("button");
    card.className = "type-card";
    card.dataset.action = "start-type";
    card.dataset.type = key;
    card.style.setProperty("--type-color", type.color);
    card.style.setProperty("--type-soft", type.soft);
    const countLabel = type.sessionSize && count > type.sessionSize
      ? `${count}문제 중 ${type.sessionSize}문제 랜덤`
      : `${count}문제`;
    card.innerHTML = `
      <span class="type-icon">${escapeHtml(type.icon)}</span>
      <strong>${type.label}</strong>
      <small>${type.description}</small>
      <small class="type-count">${countLabel}</small>
    `;
    typeGrid.append(card);
  });

  const historyList = app.querySelector("#historyList");
  if (!progress.history.length) {
    historyList.innerHTML = '<div class="history-empty">아직 풀이 기록이 없습니다.</div>';
  } else {
    progress.history.slice(0, 3).forEach((item) => {
      const row = document.createElement("div");
      row.className = "history-item";
      row.innerHTML = `
        <div>
          <strong>${item.label}</strong>
          <small>${item.date} · ${item.total}문제</small>
        </div>
        <span class="history-score">${item.score}/${item.total}</span>
      `;
      historyList.append(row);
    });
  }
}

function startQuiz(queue, label) {
  state = {
    view: "quiz",
    subject: state.subject,
    queue: shuffle(queue),
    index: 0,
    answers: [],
    checked: false,
    selected: null,
    modeLabel: label
  };
  renderQuestion();
}

function startTypeQuiz(type) {
  const meta = getTypeMeta(type);
  const pool = getQuestions().filter((question) => question.type === type);
  const queue = meta.sessionSize && pool.length > meta.sessionSize
    ? shuffle(pool).slice(0, meta.sessionSize)
    : pool;
  const suffix = meta.sessionSize && pool.length > meta.sessionSize ? ` ${meta.sessionSize}문제 랜덤` : " 집중 연습";
  startQuiz(queue, `${getSubject().label} ${meta.label}${suffix}`);
}

function renderQuestion() {
  const question = state.queue[state.index];
  const type = getTypeMeta(question.type);
  const percent = Math.round(((state.index + 1) / state.queue.length) * 100);

  app.innerHTML = `
    <section class="quiz-screen">
      <div class="quiz-meta">
        <span class="type-badge" style="--badge-color:${type.color};--badge-soft:${type.soft}">${type.label} · ${question.topic}</span>
        <span class="question-count">${state.index + 1} / ${state.queue.length}</span>
      </div>
      <div class="progress-track"><span style="width:${percent}%"></span></div>
      <article class="question-card">
        <h2>${question.prompt}</h2>
        ${question.hint ? `<p class="hint">${question.hint}</p>` : ""}
        ${question.code ? `<pre class="code-block">${escapeHtml(question.code)}</pre>` : ""}
        <div class="answer-area" id="answerArea"></div>
        <div id="feedbackArea"></div>
      </article>
      <div class="quiz-actions">
        <button class="primary-button" id="submitButton" disabled>정답 확인</button>
        <button class="secondary-button" data-action="quit">그만 풀기</button>
      </div>
    </section>
  `;

  renderAnswerInput(question);
  app.querySelector("#submitButton").addEventListener("click", handleSubmit);
}

function renderAnswerInput(question) {
  const answerArea = app.querySelector("#answerArea");
  const kind = getTypeKind(question);
  if (kind === "choice") {
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "option";
      button.dataset.option = index;
      button.innerHTML = `<span class="option-key">${String.fromCharCode(65 + index)}</span><span class="option-text">${option}</span>`;
      button.addEventListener("click", () => selectOption(index));
      answerArea.append(button);
    });
    return;
  }

  if (kind === "coding") {
    answerArea.innerHTML = '<textarea class="code-answer" id="textAnswer" spellcheck="false" placeholder="// 여기에 코드나 핵심 설명을 작성하세요"></textarea>';
  } else if (question.keywords || question.keywordsAny) {
    answerArea.innerHTML = '<textarea class="text-answer long-answer" id="textAnswer" placeholder="핵심 내용을 설명하세요"></textarea>';
  } else {
    answerArea.innerHTML = '<input class="text-answer" id="textAnswer" type="text" autocomplete="off" placeholder="정답을 입력하세요">';
  }

  const input = app.querySelector("#textAnswer");
  input.addEventListener("input", () => {
    state.selected = input.value;
    app.querySelector("#submitButton").disabled = !input.value.trim();
  });
  input.focus();
}

function selectOption(index) {
  if (state.checked) return;
  state.selected = index;
  app.querySelectorAll(".option").forEach((option) => option.classList.remove("selected"));
  app.querySelector(`[data-option="${index}"]`).classList.add("selected");
  app.querySelector("#submitButton").disabled = false;
}

function grade(question, answer) {
  const kind = getTypeKind(question);
  if (kind === "choice") return answer === question.answer;
  if (kind === "coding") {
    const source = normalize(answer);
    return question.required.every((keyword) => source.includes(normalize(keyword)));
  }
  const source = normalize(answer);
  if (question.keywords) {
    return question.keywords.every((keyword) => source.includes(normalize(keyword)));
  }
  if (question.keywordsAny) {
    const matches = question.keywordsAny.filter((keyword) => source.includes(normalize(keyword))).length;
    return matches >= (question.keywordMinimum || 1);
  }
  return question.answers.some((accepted) => source === normalize(accepted));
}

function handleSubmit() {
  if (state.checked) {
    goNext();
    return;
  }

  const question = state.queue[state.index];
  const correct = grade(question, state.selected);
  state.checked = true;
  state.answers.push({ question, answer: state.selected, correct });
  showFeedback(question, correct);

  const submitButton = app.querySelector("#submitButton");
  submitButton.textContent = state.index === state.queue.length - 1 ? "결과 보기" : "다음 문제";

  if (getTypeKind(question) === "choice") {
    app.querySelectorAll(".option").forEach((option, index) => {
      option.disabled = true;
      if (index === question.answer) option.classList.add("correct");
      if (index === state.selected && !correct) option.classList.add("wrong");
    });
  } else {
    app.querySelector("#textAnswer").disabled = true;
  }
}

function showFeedback(question, correct) {
  const kind = getTypeKind(question);
  const displayAnswer =
    kind === "choice" ? question.options[question.answer] :
    kind === "coding" ? question.sample :
    question.displayAnswer;
  const feedbackArea = app.querySelector("#feedbackArea");
  feedbackArea.innerHTML = `
    <div class="feedback" style="--feedback-bg:${correct ? "#eaf8f2" : "#fff1f1"};--feedback-color:${correct ? "#23845e" : "#c44949"}">
      <strong>${correct ? "정답입니다." : "조금 아쉬워요."}</strong>
      <p>${question.explanation}</p>
      <p class="answer-note">정답 ${kind === "coding" ? "예시" : ""}: ${kind === "coding" ? "" : displayAnswer}</p>
      ${kind === "coding" ? `<pre class="code-block">${escapeHtml(displayAnswer)}</pre>` : ""}
    </div>
  `;
}

function goNext() {
  if (state.index >= state.queue.length - 1) {
    finishQuiz();
    return;
  }
  state.index += 1;
  state.checked = false;
  state.selected = null;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function finishQuiz() {
  const score = state.answers.filter((answer) => answer.correct).length;
  const total = state.answers.length;
  const progress = loadProgress();
  progress.solved += total;
  progress.correct += score;
  progress.history.unshift({
    label: state.modeLabel,
    score,
    total,
    date: new Intl.DateTimeFormat("ko-KR", { month: "short", day: "numeric" }).format(new Date())
  });
  progress.history = progress.history.slice(0, 10);
  saveProgress(progress);
  state.view = "result";
  renderResult(score, total);
}

function renderResult(score, total) {
  const percent = total ? Math.round((score / total) * 100) : 0;
  const wrong = total - score;
  const title = percent >= 90 ? "완벽에 가까워요!" : percent >= 70 ? "좋은 흐름이에요!" : "한 번 더 보면 확실해져요.";

  app.innerHTML = `
    <section>
      <div class="result-hero">
        <span class="eyebrow">학습 완료</span>
        <div class="result-ring"><strong>${percent}</strong><span>정답률 %</span></div>
        <h1>${title}</h1>
        <p>${state.modeLabel} 세트를 끝냈습니다.</p>
      </div>
      <div class="result-breakdown">
        <div><strong>${total}</strong><small>전체 문제</small></div>
        <div><strong style="color:var(--green)">${score}</strong><small>정답</small></div>
        <div><strong style="color:var(--danger)">${wrong}</strong><small>오답</small></div>
      </div>
      <div class="section-heading" style="margin-top:26px">
        <div><span class="eyebrow">풀이 요약</span><h2>문제별 결과</h2></div>
      </div>
      <div class="review-list">
        ${state.answers.map((item, index) => `
          <article class="review-item">
            <header>
              <strong>${index + 1}. ${item.question.prompt}</strong>
              <span class="status-mark ${item.correct ? "ok" : "no"}">${item.correct ? "정답" : "오답"}</span>
            </header>
            <p>${item.question.explanation}</p>
          </article>
        `).join("")}
      </div>
      <div class="result-actions">
        ${wrong ? '<button class="primary-button" data-action="retry-wrong">오답만 다시 풀기</button>' : ""}
        <button class="${wrong ? "secondary-button" : "primary-button"}" data-action="home">홈으로 돌아가기</button>
      </div>
    </section>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  if (target.dataset.action === "start-mix") {
    startQuiz(shuffle(getQuestions()).slice(0, 10), `${getSubject().label} 랜덤 믹스`);
  }
  if (target.dataset.action === "start-type") {
    const type = target.dataset.type;
    startTypeQuiz(type);
  }
  if (target.dataset.action === "select-subject") {
    state.subject = target.dataset.subject;
    localStorage.setItem(SUBJECT_KEY, state.subject);
    renderHome();
  }
  if (target.dataset.action === "quit" || target.dataset.action === "home") {
    renderHome();
  }
  if (target.dataset.action === "retry-wrong") {
    const wrongQuestions = state.answers.filter((answer) => !answer.correct).map((answer) => answer.question);
    startQuiz(wrongQuestions, "오답 다시 풀기");
  }
});

document.querySelector("#brandButton").addEventListener("click", renderHome);
document.querySelector("#resetButton").addEventListener("click", () => {
  if (confirm(`${getSubject().label} 모드의 누적 학습 기록을 초기화할까요?`)) {
    localStorage.removeItem(`${STORAGE_PREFIX}-${state.subject}`);
    renderHome();
  }
});

const installButton = document.querySelector("#installButton");
let deferredInstallPrompt = null;

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function updateInstallButton() {
  installButton.hidden = isStandalone();
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallButton();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

installButton.addEventListener("click", async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    updateInstallButton();
    return;
  }

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  alert(
    isIOS
      ? "Safari 하단의 공유 버튼을 누른 뒤 '홈 화면에 추가'를 선택하세요."
      : "브라우저 메뉴에서 '앱 설치' 또는 '홈 화면에 추가'를 선택하세요."
  );
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The app still works online when service worker registration is unavailable.
    });
  });
}

renderHome();
updateInstallButton();

if (new URLSearchParams(window.location.search).get("mode") === "mix") {
  startQuiz(shuffle(getQuestions()).slice(0, 10), `${getSubject().label} 랜덤 믹스`);
}
