//组织结构类型实体
export class GroupTreeEntity {


  public Text: string;
  public Link: string;
  public Description: string;
  public BoxWidth: string;
  public BoxHeight?: number;
  public parentNode: string;
  public NodeGroupId: string; //同一层的级别序号,从零开始  
  public NodeOrderId: string; //同一级中的序号,从零开始  
  public TopLine: number;
  public BottomLine: number;
  public Depth: number;
  public Top: number;
  public Left: number;
  public Type: number;
  public Nodes: any[];
  public customParam: any[]; //节点自定义参数 

  public Box: any;
  public Templet: any;

public LineSize :number = 2;
public LineColor:string = "#000000";
public IntervalWidth:number ;
public IntervalHeight:number=50;
public DepthGrou: string; //public DepthGrou:[n].Nodes 层深节点集合  
//public DepthGrou:[n].NodeGroups[m] 层深节点按上层分类集合 public DepthGrou:[n].NodeGroups[m][k]层深节点  

public BoxTemple:string;
public ShowType : string;
public BoxTemplet : string;
public DepthGroup : string;



inIt(){
    
}
}