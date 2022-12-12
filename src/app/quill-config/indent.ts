import Parchment from 'parchment';
import Quill from 'quill';

const IndentInstance: Object = Quill.import('formats/indent');
const IndentClass: any = IndentInstance.constructor;
class IndentAttributor extends IndentClass {
  constructor(attrName: string, keyName: string, options?: any) {
    super(attrName, keyName, options);
  }

  add(node: HTMLElement, value: number) {
    const result = super.add(node, value);

	if (result) {
		node.style.paddingLeft = `${value*3}em`;
	}
    return result;
  }

  remove(node: HTMLElement) {
    super.remove(node);
    node.style.paddingLeft = '';
  }
}

const Indent = new IndentAttributor('indent', 'ql-indent',{
	scope: Parchment.Scope.BLOCK,
	whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
  });

export default Indent;
