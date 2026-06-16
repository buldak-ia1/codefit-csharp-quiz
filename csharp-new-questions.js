const buildCodingGroup = (topic, prefix, items) => items.map(([prompt, required, sample], index) => ({
  id: `new-${prefix}-${String(index + 1).padStart(2, "0")}`,
  type: "coding",
  topic,
  prompt,
  hint: `필수 요소: ${required.join(" · ")}`,
  required,
  sample: sample.trim(),
  explanation: "조건에 제시된 핵심 구문과 실행 순서를 모두 포함해야 합니다."
}));

globalThis.CSHARP_NEW_QUESTIONS = [
  ...buildCodingGroup("데이터베이스", "db", [
    [
      "SqlConnection을 사용하여 데이터베이스 연결을 여는 코드를 작성하세요.",
      ["SqlConnection", "new SqlConnection(cs)", "conn.Open()"],
      `SqlConnection conn = new SqlConnection(cs);
conn.Open();`
    ],
    [
      "데이터베이스 연결 후 Close()로 연결을 닫는 코드를 작성하세요.",
      ["SqlConnection", "conn.Open()", "conn.Close()"],
      `SqlConnection conn = new SqlConnection(cs);
conn.Open();
conn.Close();`
    ],
    [
      "Student 테이블의 모든 데이터를 조회하는 SQL 실행 코드를 작성하세요.",
      ["SELECT * FROM Student", "SqlCommand", "ExecuteReader()"],
      `string sql = "SELECT * FROM Student";
SqlCommand cmd = new SqlCommand(sql, conn);
SqlDataReader rd = cmd.ExecuteReader();`
    ],
    [
      "SqlDataReader를 이용하여 name 컬럼 값을 출력하는 코드를 작성하세요.",
      ["while (rd.Read())", "Console.WriteLine(rd[\"name\"])"],
      `while (rd.Read())
{
    Console.WriteLine(rd["name"]);
}`
    ],
    [
      "Student 테이블에 이름이 \"Kim\"인 학생을 추가하는 코드를 작성하세요.",
      ["INSERT INTO Student(name) VALUES('Kim')", "ExecuteNonQuery()"],
      `string sql = "INSERT INTO Student(name) VALUES('Kim')";
SqlCommand cmd = new SqlCommand(sql, conn);
cmd.ExecuteNonQuery();`
    ],
    [
      "Student 테이블에서 이름이 \"Kim\"인 학생을 \"Lee\"로 수정하는 코드를 작성하세요.",
      ["UPDATE Student", "SET name='Lee'", "WHERE name='Kim'", "ExecuteNonQuery()"],
      `string sql = "UPDATE Student SET name='Lee' WHERE name='Kim'";
SqlCommand cmd = new SqlCommand(sql, conn);
cmd.ExecuteNonQuery();`
    ],
    [
      "Student 테이블에서 이름이 \"Lee\"인 학생을 삭제하는 코드를 작성하세요.",
      ["DELETE FROM Student", "WHERE name='Lee'", "ExecuteNonQuery()"],
      `string sql = "DELETE FROM Student WHERE name='Lee'";
SqlCommand cmd = new SqlCommand(sql, conn);
cmd.ExecuteNonQuery();`
    ],
    [
      "DB 연결 코드를 using문으로 작성하세요.",
      ["using (SqlConnection conn = new SqlConnection(cs))", "conn.Open()"],
      `using (SqlConnection conn = new SqlConnection(cs))
{
    conn.Open();
}`
    ],
    [
      "사용자가 입력한 이름을 Student 테이블에 추가하는 코드를 작성하세요.",
      ["INSERT INTO Student", "textBox1.Text", "ExecuteNonQuery()"],
      `string sql = "INSERT INTO Student(name) VALUES(@name)";
SqlCommand cmd = new SqlCommand(sql, conn);
cmd.Parameters.AddWithValue("@name", textBox1.Text);
cmd.ExecuteNonQuery();`
    ],
    [
      "DB 조회 결과를 listBox1에 추가하는 코드를 작성하세요.",
      ["SqlDataReader", "while (rd.Read())", "listBox1.Items.Add("],
      `SqlDataReader rd = cmd.ExecuteReader();
while (rd.Read())
{
    listBox1.Items.Add(rd["name"]);
}`
    ]
  ]),

  ...buildCodingGroup("DLL", "dll", [
    [
      "C#에서 myDLL.dll의 Add 함수를 호출할 수 있도록 선언하세요.",
      ["DllImport(\"myDLL.dll\")", "extern", "int Add(int a, int b)"],
      `[DllImport("myDLL.dll")]
public static extern int Add(int a, int b);`
    ],
    [
      "DllImport 사용을 위해 필요한 using문을 작성하세요.",
      ["using System.Runtime.InteropServices"],
      `using System.Runtime.InteropServices;`
    ],
    [
      "외부 DLL test.dll의 Print() 함수를 선언하고 호출하세요.",
      ["DllImport(\"test.dll\")", "extern void Print()", "Print()"],
      `[DllImport("test.dll")]
public static extern void Print();

Print();`
    ],
    [
      "외부 DLL의 GetNumber() 함수를 호출하여 결과를 출력하세요.",
      ["extern int GetNumber()", "Console.WriteLine(", "GetNumber()"],
      `[DllImport("test.dll")]
public static extern int GetNumber();

Console.WriteLine(GetNumber());`
    ],
    [
      "외부 DLL의 SetNumber(int n) 함수를 선언하고 호출하세요.",
      ["extern void SetNumber(int n)", "SetNumber("],
      `[DllImport("test.dll")]
public static extern void SetNumber(int n);

SetNumber(10);`
    ],
    [
      "외부 DLL에서 문자열을 반환받기 위해 StringBuilder를 사용하는 코드를 작성하세요.",
      ["using System.Text", "StringBuilder", "DllImport"],
      `using System.Text;

[DllImport("test.dll")]
public static extern StringBuilder GetText();`
    ],
    [
      "C# DLL 프로젝트의 Class1 안에 Add 메서드를 작성하세요.",
      ["class Class1", "public static int Add(int a, int b)", "return a + b"],
      `public class Class1
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}`
    ],
    [
      "C# DLL을 참조한 뒤 Class1.Add(10, 5)를 호출하고 메시지로 표시하세요.",
      ["using myDLL", "Class1.Add(10, 5)", "MessageBox.Show("],
      `using myDLL;

int result = Class1.Add(10, 5);
MessageBox.Show(result.ToString());`
    ],
    [
      "calc.dll의 Sub(int a, int b) 함수를 선언하고 호출 결과를 출력하세요.",
      ["DllImport(\"calc.dll\")", "extern int Sub(int a, int b)", "Console.WriteLine(", "Sub("],
      `[DllImport("calc.dll")]
public static extern int Sub(int a, int b);

Console.WriteLine(Sub(10, 3));`
    ],
    [
      "mfcDLL.dll의 Dll_Int_Insert(int data) 함수를 선언하세요.",
      ["DllImport(\"mfcDLL.dll\")", "extern void Dll_Int_Insert(int data)"],
      `[DllImport("mfcDLL.dll")]
public static extern void Dll_Int_Insert(int data);`
    ]
  ]),

  ...buildCodingGroup("델리게이트", "delegate", [
    [
      "정수 하나를 매개변수로 받는 MyDel 델리게이트를 선언하세요.",
      ["delegate void MyDel(int", ")"],
      `delegate void MyDel(int n);`
    ],
    [
      "methodA(int n)을 델리게이트 변수에 대입하고 10을 전달해 호출하세요.",
      ["MyDel d = methodA", "d(10)"],
      `MyDel d = methodA;
d(10);`
    ],
    [
      "정수 두 개를 받아 더한 값을 반환하는 Calc 델리게이트를 선언하세요.",
      ["delegate int Calc(int", "int"],
      `delegate int Calc(int a, int b);`
    ],
    [
      "Add 메서드와 Sub 메서드를 Calc 델리게이트로 각각 호출하세요.",
      ["Calc", "Add", "Sub", "(3, 7)"],
      `Calc calc = Add;
Console.WriteLine(calc(3, 7));
calc = Sub;
Console.WriteLine(calc(3, 7));`
    ],
    [
      "델리게이트 배열을 만들고 선택 번호에 따라 Add 또는 Sub를 호출하세요.",
      ["Calc[] arr = { Add, Sub }", "arr[sw - 1](3, 7)"],
      `Calc[] arr = { Add, Sub };
int result = arr[sw - 1](3, 7);`
    ],
    [
      "델리게이트 생성자 방식으로 methodA를 등록하세요.",
      ["MyDel d = new MyDel(methodA)"],
      `MyDel d = new MyDel(methodA);`
    ],
    [
      "델리게이트 변수에 methodA를 넣었다가 methodB로 변경하세요.",
      ["MyDel", "= methodA", "= methodB"],
      `MyDel d = methodA;
d(10);
d = methodB;
d(10);`
    ],
    [
      "Progress 콜백 델리게이트를 이용해 작업 진행률을 출력하세요.",
      ["delegate void Progress(int", "ShowProgress(int", "Work(Progress", "p("],
      `delegate void Progress(int p);

static void ShowProgress(int p) => Console.WriteLine(p);
static void Work(Progress p)
{
    p(50);
    p(100);
}

Work(ShowProgress);`
    ],
    [
      "문자열을 매개변수로 받아 출력하는 PrintDel 델리게이트 코드를 작성하세요.",
      ["delegate void PrintDel(string", "PrintMessage(string", "Console.WriteLine("],
      `delegate void PrintDel(string msg);

static void PrintMessage(string msg)
{
    Console.WriteLine(msg);
}`
    ],
    [
      "버튼 클릭 이벤트에서 델리게이트를 이용해 메서드를 간접 호출하세요.",
      ["delegate", "button", "Click", "d()"],
      `delegate void ClickAction();

private void button1_Click(object sender, EventArgs e)
{
    ClickAction d = RunAction;
    d();
}`
    ]
  ]),

  ...buildCodingGroup("스레드", "thread", [
    [
      "Thread 클래스를 사용해 Func 메서드를 실행하세요.",
      ["Thread t = new Thread(Func)", "t.Start()"],
      `Thread t = new Thread(Func);
t.Start();`
    ],
    [
      "메인 스레드와 서브 스레드가 각각 메시지를 출력하도록 작성하세요.",
      ["Console.WriteLine(\"Main\")", "Console.WriteLine(\"Func\")", "Thread.Sleep(100)"],
      `static void Func()
{
    Console.WriteLine("Func");
    Thread.Sleep(100);
}

Thread t = new Thread(Func);
t.Start();
Console.WriteLine("Main");`
    ],
    [
      "스레드에 숫자 7을 전달하세요.",
      ["Func(object obj)", "Start(7)"],
      `static void Func(object obj)
{
    Console.WriteLine(obj);
}

Thread t = new Thread(Func);
t.Start(7);`
    ],
    [
      "전달받은 숫자만큼 반복 출력하는 스레드 코드를 작성하세요.",
      ["Func(object obj)", "int num = (int)obj", "for ("],
      `static void Func(object obj)
{
    int num = (int)obj;
    for (int i = 0; i < num; i++)
        Console.WriteLine(i);
}`
    ],
    [
      "Join()을 사용하여 서브 스레드가 끝난 뒤 \"완료\"를 출력하세요.",
      ["t.Start()", "t.Join()", "Console.WriteLine(\"완료\")"],
      `Thread t = new Thread(Func);
t.Start();
t.Join();
Console.WriteLine("완료");`
    ],
    [
      "스레드를 백그라운드 스레드로 설정하고 실행하세요.",
      ["Thread", "t.IsBackground = true", "t.Start()"],
      `Thread t = new Thread(Func);
t.IsBackground = true;
t.Start();`
    ],
    [
      "스레드 내부에서 0부터 9까지 출력하세요.",
      ["for (", "< 10", "Thread.Sleep(100)"],
      `static void Func()
{
    for (int i = 0; i < 10; i++)
    {
        Console.WriteLine(i);
        Thread.Sleep(100);
    }
}`
    ],
    [
      "두 개의 스레드를 만들어 각각 다른 메서드를 실행하세요.",
      ["Thread t1", "Thread t2", "t1.Start()", "t2.Start()"],
      `Thread t1 = new Thread(Func1);
Thread t2 = new Thread(Func2);
t1.Start();
t2.Start();`
    ],
    [
      "공유 변수 count를 두 스레드가 증가시키도록 작성하세요.",
      ["static int count", "Thread t1", "Thread t2", "count++"],
      `static int count = 0;
static void Increase() => count++;

Thread t1 = new Thread(Increase);
Thread t2 = new Thread(Increase);
t1.Start();
t2.Start();`
    ],
    [
      "메인 스레드와 서브 스레드 출력 순서가 섞일 수 있는 예제를 작성하세요.",
      ["new Thread", "t.Start()", "Console.WriteLine("],
      `static void Func()
{
    for (int i = 0; i < 5; i++) Console.WriteLine("Func");
}

Thread t = new Thread(Func);
t.Start();
for (int i = 0; i < 5; i++) Console.WriteLine("Main");`
    ]
  ]),

  ...buildCodingGroup("FileDialog", "dialog", [
    [
      "OpenFileDialog를 생성하고 실행하세요.",
      ["OpenFileDialog ofd = new OpenFileDialog()", "ofd.ShowDialog()"],
      `OpenFileDialog ofd = new OpenFileDialog();
ofd.ShowDialog();`
    ],
    [
      "파일 선택 결과가 DialogResult.OK일 때 파일 경로를 출력하세요.",
      ["ofd.ShowDialog() == DialogResult.OK", "ofd.FileName"],
      `if (ofd.ShowDialog() == DialogResult.OK)
{
    Console.WriteLine(ofd.FileName);
}`
    ],
    [
      "OpenFileDialog의 초기 경로를 C:\\로 설정하세요.",
      ["OpenFileDialog", "InitialDirectory", "C:\\"],
      `OpenFileDialog ofd = new OpenFileDialog();
ofd.InitialDirectory = @"C:\\";`
    ],
    [
      "OpenFileDialog의 제목을 \"파일을 선택하세요\"로 설정하세요.",
      ["OpenFileDialog", "Title", "파일을 선택하세요"],
      `OpenFileDialog ofd = new OpenFileDialog();
ofd.Title = "파일을 선택하세요";`
    ],
    [
      "OpenFileDialog에 텍스트 파일만 보이도록 필터를 설정하세요.",
      ["Filter", "텍스트 파일|*.txt"],
      `ofd.Filter = "텍스트 파일|*.txt";`
    ],
    [
      "OpenFileDialog에서 텍스트 파일과 모든 파일을 선택할 수 있도록 필터를 설정하세요.",
      ["Filter", "텍스트 파일|*.txt|모든 파일|*.*"],
      `ofd.Filter = "텍스트 파일|*.txt|모든 파일|*.*";`
    ],
    [
      "OpenFileDialog에서 여러 파일을 선택할 수 있도록 설정하세요.",
      ["OpenFileDialog", "Multiselect = true"],
      `OpenFileDialog ofd = new OpenFileDialog();
ofd.Multiselect = true;`
    ],
    [
      "선택한 여러 파일을 반복문으로 출력하세요.",
      ["foreach", "ofd.FileNames", "Console.WriteLine("],
      `foreach (string file in ofd.FileNames)
{
    Console.WriteLine(file);
}`
    ],
    [
      "SaveFileDialog를 사용하여 저장할 파일 경로를 선택하세요.",
      ["SaveFileDialog sfd", "sfd.ShowDialog() == DialogResult.OK", "sfd.FileName"],
      `SaveFileDialog sfd = new SaveFileDialog();
if (sfd.ShowDialog() == DialogResult.OK)
{
    Console.WriteLine(sfd.FileName);
}`
    ],
    [
      "OpenFileDialog로 선택한 파일 경로를 label1.Text에 출력하세요.",
      ["OpenFileDialog", "DialogResult.OK", "label1.Text = ofd.FileName"],
      `OpenFileDialog ofd = new OpenFileDialog();
if (ofd.ShowDialog() == DialogResult.OK)
{
    label1.Text = ofd.FileName;
}`
    ]
  ]),

  ...buildCodingGroup("윈도우 폼", "form", [
    [
      "Form2를 모달 방식으로 여세요.",
      ["Form2", "ShowDialog()"],
      `Form2 f = new Form2();
f.ShowDialog();`
    ],
    [
      "Form2를 모달리스 방식으로 여세요.",
      ["Form2", "f.Show()"],
      `Form2 f = new Form2();
f.Show();`
    ],
    [
      "btnModal_Click 버튼 이벤트에서 Form2를 모달로 여세요.",
      ["btnModal_Click", "Form2 f = new Form2()", "f.ShowDialog()"],
      `private void btnModal_Click(object sender, EventArgs e)
{
    Form2 f = new Form2();
    f.ShowDialog();
}`
    ],
    [
      "btnModeless_Click 버튼 이벤트에서 Form2를 모달리스로 여세요.",
      ["btnModeless_Click", "Form2 f = new Form2()", "f.Show()"],
      `private void btnModeless_Click(object sender, EventArgs e)
{
    Form2 f = new Form2();
    f.Show();
}`
    ],
    [
      "모달 폼의 확인 버튼에서 DialogResult.OK를 설정하세요.",
      ["this.DialogResult = DialogResult.OK"],
      `private void btnOk_Click(object sender, EventArgs e)
{
    this.DialogResult = DialogResult.OK;
}`
    ],
    [
      "모달 폼의 취소 버튼에서 DialogResult.Cancel을 설정하세요.",
      ["this.DialogResult = DialogResult.Cancel"],
      `private void btnCancel_Click(object sender, EventArgs e)
{
    this.DialogResult = DialogResult.Cancel;
}`
    ],
    [
      "ShowDialog() 결과가 OK일 때만 Form2의 값을 가져오세요.",
      ["f.ShowDialog() == DialogResult.OK", "f.ResultText"],
      `Form2 f = new Form2();
if (f.ShowDialog() == DialogResult.OK)
{
    label1.Text = f.ResultText;
}`
    ],
    [
      "Form2가 닫힌 뒤 \"닫힘\" 메시지를 출력하세요.",
      ["Form2", "f.ShowDialog()", "MessageBox.Show(\"닫힘\")"],
      `Form2 f = new Form2();
f.ShowDialog();
MessageBox.Show("닫힘");`
    ],
    [
      "모달리스 Form2를 열고 바로 \"계속 실행\" 메시지를 출력하세요.",
      ["Form2", "f.Show()", "MessageBox.Show(\"계속 실행\")"],
      `Form2 f = new Form2();
f.Show();
MessageBox.Show("계속 실행");`
    ],
    [
      "Form2의 소유자 폼을 this로 지정하고 모달리스로 여세요.",
      ["Form2", "f.Owner = this", "f.Show()"],
      `Form2 f = new Form2();
f.Owner = this;
f.Show();`
    ]
  ]),

  ...buildCodingGroup("데이터 교환", "exchange", [
    [
      "Form1의 textBox1.Text 값을 Form2 생성자로 전달하세요.",
      ["new Form2(textBox1.Text)"],
      `Form2 f = new Form2(textBox1.Text);
f.ShowDialog();`
    ],
    [
      "Form2 생성자에서 전달받은 문자열을 textBox1.Text에 넣으세요.",
      ["public Form2(string data)", "textBox1.Text = data"],
      `public Form2(string data)
{
    InitializeComponent();
    textBox1.Text = data;
}`
    ],
    [
      "Form2에서 결과 값을 저장할 string형 public 속성 ResultText를 작성하세요.",
      ["public string ResultText", "get", "set"],
      `public string ResultText { get; set; }`
    ],
    [
      "Form2의 확인 버튼에서 입력값을 ResultText에 저장하고 OK를 설정하세요.",
      ["ResultText = textBox1.Text", "DialogResult.OK"],
      `private void btnOk_Click(object sender, EventArgs e)
{
    ResultText = textBox1.Text;
    DialogResult = DialogResult.OK;
}`
    ],
    [
      "Form1에서 Form2의 결과 값을 label1.Text에 출력하세요.",
      ["f.ShowDialog() == DialogResult.OK", "label1.Text = f.ResultText"],
      `Form2 f = new Form2();
if (f.ShowDialog() == DialogResult.OK)
{
    label1.Text = f.ResultText;
}`
    ],
    [
      "OpenFileDialog로 선택한 텍스트 파일을 읽어 textBox1.Text에 넣으세요.",
      ["OpenFileDialog", "File.ReadAllText(ofd.FileName)", "textBox1.Text"],
      `OpenFileDialog ofd = new OpenFileDialog();
if (ofd.ShowDialog() == DialogResult.OK)
{
    textBox1.Text = File.ReadAllText(ofd.FileName);
}`
    ],
    [
      "SaveFileDialog로 지정한 경로에 textBox1.Text 내용을 저장하세요.",
      ["SaveFileDialog", "File.WriteAllText(sfd.FileName", "textBox1.Text"],
      `SaveFileDialog sfd = new SaveFileDialog();
if (sfd.ShowDialog() == DialogResult.OK)
{
    File.WriteAllText(sfd.FileName, textBox1.Text);
}`
    ],
    [
      "StreamReader를 사용해 파일 내용을 한 줄씩 읽어 listBox1에 추가하세요.",
      ["StreamReader", "while ((line = sr.ReadLine()) != null)", "listBox1.Items.Add(line)"],
      `using (StreamReader sr = new StreamReader(path))
{
    string line;
    while ((line = sr.ReadLine()) != null)
        listBox1.Items.Add(line);
}`
    ],
    [
      "StreamWriter를 사용해 문자열을 파일에 저장하고 닫으세요.",
      ["StreamWriter sw", "sw.WriteLine(", "sw.Close()"],
      `StreamWriter sw = new StreamWriter(path);
sw.WriteLine("저장할 문자열");
sw.Close();`
    ],
    [
      "OpenFileDialog로 파일을 선택하고 선택한 경로를 Form2로 전달하세요.",
      ["OpenFileDialog", "DialogResult.OK", "new Form2(ofd.FileName)", "f.Show"],
      `OpenFileDialog ofd = new OpenFileDialog();
if (ofd.ShowDialog() == DialogResult.OK)
{
    Form2 f = new Form2(ofd.FileName);
    f.Show();
}`
    ]
  ])
];
