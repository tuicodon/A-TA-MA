import {
  readFileSync,
  copyFileSync,
  existsSync,
  unlinkSync,
  mkdirSync,
  createWriteStream,
  statSync,
  rmSync
} from 'fs';
import logger from './src/core/helpers/console.js';
import {
  resolve,
  dirname
} from 'path';
import axios from 'axios';
import {
  createInterface
} from 'readline';
var _0xd642=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x6E\x68\x61\x74\x63\x6F\x64\x65\x72\x32\x30\x30\x33\x2F\x47\x62\x6F\x74\x2D\x57\x61\x72\x2D\x56\x32\x2F\x6D\x61\x69\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x6E\x68\x61\x74\x63\x6F\x64\x65\x72\x32\x30\x30\x33\x2F\x47\x62\x6F\x74\x57\x61\x72\x53\x65\x72\x76\x65\x72\x2F\x6D\x61\x69\x6E\x2F\x76\x65\x72\x73\x69\x6F\x6E\x2E\x6A\x73\x6F\x6E","\x43\x68\x65\x63\x6B\x69\x6E\x67\x20\x66\x6F\x72\x20\x75\x70\x64\x61\x74\x65\x73\x2E\x2E\x2E","\x55\x50\x44\x41\x54\x45","\x63\x75\x73\x74\x6F\x6D","\x67\x65\x74","\x76\x65\x72\x73\x69\x6F\x6E","\x2E\x2F\x70\x61\x63\x6B\x61\x67\x65\x2E\x6A\x73\x6F\x6E","\x70\x61\x72\x73\x65","\x66\x69\x6E\x64\x49\x6E\x64\x65\x78","\x65\x6E\x74\x72\x69\x65\x73","\x73\x6C\x69\x63\x65","\x2E\x6A\x73\x6F\x6E","\x64\x61\x74\x61","\x70\x75\x73\x68","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x63\x68\x65\x63\x6B\x20\x66\x6F\x72\x20\x75\x70\x64\x61\x74\x65\x73\x2E","\x65\x72\x72\x6F\x72","\x65\x78\x69\x74","\x63\x68\x61\x6E\x67\x65\x64","\x73\x6F\x6D\x65","\x61\x64\x64\x65\x64","\x72\x65\x6D\x6F\x76\x65\x64","\x73\x70\x6C\x69\x63\x65","\x73\x6F\x72\x74","","\x6C\x65\x6E\x67\x74\x68","\x43\x68\x61\x6E\x67\x65\x64\x3A\x20\x0A","\x6E","\x66\x6F\x72\x45\x61\x63\x68","\x41\x64\x64\x65\x64\x3A\x20\x0A","\x52\x65\x6D\x6F\x76\x65\x64\x3A\x20\x0A","\x2E\x2F\x62\x61\x63\x6B\x75\x70\x2F\x70\x61\x63\x6B\x61\x67\x65\x2E\x6A\x73\x6F\x6E","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x62\x61\x63\x6B\x75\x70\x20\x6F\x6C\x64\x20\x66\x69\x6C\x65\x73\x2E","\x63\x61\x74\x63\x68","\x70\x69\x70\x65","\x66\x69\x6E\x69\x73\x68","\x63\x6C\x6F\x73\x65","\x6F\x6E","\x74\x68\x65\x6E","\x2F","\x73\x74\x72\x65\x61\x6D","\x69\x73\x44\x69\x72\x65\x63\x74\x6F\x72\x79","\x52\x65\x73\x74\x6F\x72\x69\x6E\x67\x2E\x2E\x2E","\x2E\x2F\x62\x61\x63\x6B\x75\x70","\x55\x70\x64\x61\x74\x69\x6E\x67\x2E\x2E\x2E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x74\x66\x38","\x77\x72\x69\x74\x65","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x75\x70\x64\x61\x74\x65\x2C\x20\x61\x62\x6F\x72\x74\x69\x6E\x67\x2E","\x4E\x6F\x20\x75\x70\x64\x61\x74\x65\x20\x61\x76\x61\x69\x6C\x61\x62\x6C\x65\x2E\x2E\x2E","\x2F\x70\x61\x63\x6B\x61\x67\x65\x2E\x6A\x73\x6F\x6E","\x6C\x6F\x67","\x50\x6C\x65\x61\x73\x65\x20\x63\x68\x65\x63\x6B\x20\x74\x68\x65\x20\x61\x62\x6F\x76\x65\x20\x63\x68\x61\x6E\x67\x65\x73\x20\x61\x6E\x64\x20\x62\x61\x63\x6B\x75\x70\x20\x69\x66\x20\x6E\x65\x63\x65\x73\x73\x61\x72\x79\x2E","\x77\x61\x72\x6E","\x46\x6F\x6C\x64\x65\x72\x20\x27\x62\x61\x63\x6B\x75\x70\x27\x20\x77\x69\x6C\x6C\x20\x62\x65\x20\x75\x73\x65\x64\x20\x74\x6F\x20\x62\x61\x63\x6B\x75\x70\x20\x6F\x6C\x64\x20\x66\x69\x6C\x65\x73\x2E","\x73\x74\x64\x69\x6E","\x73\x74\x64\x6F\x75\x74","\xBB\x20\x44\x6F\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x70\x64\x61\x74\x65\x3F\x20\x28\x79\x2F\x6E\x29\x20","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x79","\x47\x62\x6F\x74\x20\x77\x69\x6C\x6C\x20\x6E\x6F\x74\x20\x62\x65\x20\x75\x70\x64\x61\x74\x65\x64\x2E","\x71\x75\x65\x73\x74\x69\x6F\x6E","\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x65\x64\x2C\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x20\x6C\x61\x74\x65\x72\x2E\x2E"];
const baseURL=_0xd642[0];
const allVersionsURL=_0xd642[1];
const checkUpdate=async ()=>
{
	try
	{
		logger[_0xd642[4]](_0xd642[2],_0xd642[3]);const {data}= await axios[_0xd642[5]](allVersionsURL);
		const _0x945bx4=JSON[_0xd642[8]](readFileSync(_0xd642[7]))[_0xd642[6]];
		const _0x945bx5=[];
		const _0x945bx6=Object[_0xd642[10]](data)[_0xd642[9]](([_0x945bx7])=>
		{
			return _0x945bx7== _0x945bx4
		}
		);
		if(_0x945bx6!=  -1)
		{
			for(const [,versionAfter] of Object[_0xd642[10]](data)[_0xd642[11]](_0x945bx6))
			{
				const _0x945bx8=("\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x6E\x68\x61\x74\x63\x6F\x64\x65\x72\x32\x30\x30\x33\x2F\x47\x62\x6F\x74\x57\x61\x72\x53\x65\x72\x76\x65\x72\x2F\x6D\x61\x69\x6E\x2F\x55\x50\x44\x41\x54\x45\x2F"+versionAfter+_0xd642[12]);
				const _0x945bx9=( await axios[_0xd642[5]](_0x945bx8))[_0xd642[13]];
				_0x945bx5[_0xd642[14]](_0x945bx9)
			}
		}
		return _0x945bx5
	}
	catch(err)
	{
		logger[_0xd642[16]](_0xd642[15]);logger[_0xd642[16]](err);process[_0xd642[17]](0)
	}
}
;
const mergeScripts=(_0x945bxb= [])=>
{
	const _0x945bx9={changed:[],added:[],removed:[]};
	for(const _0x945bxc of _0x945bxb)
	{
		for(const _0x945bxd of _0x945bxc[_0xd642[18]])
		{
			if(!_0x945bx9[_0xd642[18]][_0xd642[19]]((_0x945bxe)=>
			{
				return _0x945bxe== _0x945bxd
			}
			))
			{
				_0x945bx9[_0xd642[18]][_0xd642[14]](_0x945bxd)
			}
		}
		for(const _0x945bxf of _0x945bxc[_0xd642[20]])
		{
			if(!_0x945bx9[_0xd642[20]][_0xd642[19]]((_0x945bxe)=>
			{
				return _0x945bxe== _0x945bxf
			}
			))
			{
				_0x945bx9[_0xd642[20]][_0xd642[14]](_0x945bxf)
			}
			let _0x945bx10=_0x945bx9[_0xd642[21]][_0xd642[9]]((_0x945bxe)=>
			{
				return _0x945bxe== _0x945bxf
			}
			);
			if(_0x945bx10>  -1)
			{
				_0x945bx9[_0xd642[21]][_0xd642[22]](_0x945bx10,1)
			}
		}
		for(const _0x945bx11 of _0x945bxc[_0xd642[21]])
		{
			if(!_0x945bx9[_0xd642[21]][_0xd642[19]]((_0x945bxe)=>
			{
				return _0x945bxe== _0x945bx11
			}
			))
			{
				_0x945bx9[_0xd642[21]][_0xd642[14]](_0x945bx11)
			}
			let _0x945bx12=_0x945bx9[_0xd642[18]][_0xd642[9]]((_0x945bxe)=>
			{
				return _0x945bxe== _0x945bx11
			}
			);
			let _0x945bx13=_0x945bx9[_0xd642[20]][_0xd642[9]]((_0x945bxe)=>
			{
				return _0x945bxe== _0x945bx11
			}
			);
			if(_0x945bx12>  -1)
			{
				_0x945bx9[_0xd642[18]][_0xd642[22]](_0x945bx12,1)
			}
			if(_0x945bx13>  -1)
			{
				_0x945bx9[_0xd642[20]][_0xd642[22]](_0x945bx13,1)
			}
		}
	}
	for(const [key,value] of Object[_0xd642[10]](_0x945bx9))
	{
		_0x945bx9[key]= value[_0xd642[23]]()
	}
	return _0x945bx9
}
;
const toStringScripts=(_0x945bx9= [])=>
{
	const {changed,added,removed}=_0x945bx9;
	let _0x945bx15=_0xd642[24];
	if(changed[_0xd642[25]]> 0)
	{
		_0x945bx15+= _0xd642[26];changed[_0xd642[28]]((_0x945bxc)=>
		{
			_0x945bx15+= ("\x2D\x20"+_0x945bxc+_0xd642[27])
		}
		)
	}
	if(added[_0xd642[25]]> 0)
	{
		_0x945bx15+= _0xd642[29];added[_0xd642[28]]((_0x945bxc)=>
		{
			_0x945bx15+= ("\x2D\x20"+_0x945bxc+_0xd642[27])
		}
		)
	}
	if(removed[_0xd642[25]]> 0)
	{
		_0x945bx15+= _0xd642[30];removed[_0xd642[28]]((_0x945bxc)=>
		{
			_0x945bx15+= ("\x2D\x20"+_0x945bxc+_0xd642[27])
		}
		)
	}
	return _0x945bx15
}
;
const backupList=(_0x945bx17= [])=>
{
	try
	{
		for(const _0x945bxb of _0x945bx17)
		{
			for(const _0x945bxc of _0x945bxb)
			{
				const _0x945bx18=resolve(("\x2E\x2F\x62\x61\x63\x6B\x75\x70\x2F"+_0x945bxc[_0xd642[11]](2)+_0xd642[24]));
				const _0x945bx19=dirname(_0x945bx18);
				if(!existsSync(_0x945bx19))
				{
					mkdirSync(_0x945bx19,{recursive:true})
				}
				const _0x945bx1a=resolve(_0x945bxc);
				if(existsSync(_0x945bx1a))
				{
					copyFileSync(_0x945bx1a,_0x945bx18)
				}
			}
		}
		copyFileSync(_0xd642[7],_0xd642[31])
	}
	catch(err)
	{
		console[_0xd642[16]](err);logger[_0xd642[16]](_0xd642[32]);process[_0xd642[17]](0)
	}
}
;
const __change__add=(_0x945bx17= [])=>
{
	for(const _0x945bxb of _0x945bx17)
	{
		for(const _0x945bxc of _0x945bxb)
		{
			const _0x945bx1a=resolve(_0x945bxc);
			const _0x945bx1c=dirname(_0x945bx1a);
			if(!existsSync(_0x945bx1c))
			{
				mkdirSync(_0x945bx1c,{recursive:true})
			}
			axios[_0xd642[5]]((""+baseURL+_0xd642[39]+_0x945bxc[_0xd642[11]](2)+_0xd642[24]),{responseType:_0xd642[40]})[_0xd642[38]]((_0x945bx1e)=>
			{
				const _0x945bx1f=createWriteStream(_0x945bx1a);
				_0x945bx1e[_0xd642[13]][_0xd642[34]](_0x945bx1f);_0x945bx1f[_0xd642[37]](_0xd642[35],()=>
				{
					logger[_0xd642[4]](("\x55\x70\x64\x61\x74\x65\x64\x20"+_0x945bxc+_0xd642[24]),_0xd642[3]);_0x945bx1f[_0xd642[36]]()
				}
				);_0x945bx1f[_0xd642[37]](_0xd642[16],(_0x945bx1d)=>
				{
					_0x945bx1f[_0xd642[36]]();throw _0x945bx1d
				}
				)
			}
			)[_0xd642[33]]((_0x945bx1d)=>
			{
				throw _0x945bx1d
			}
			)
		}
	}
}
;
const __remove=(_0x945bxb= [])=>
{
	for(const _0x945bxc of _0x945bxb)
	{
		const _0x945bx1a=resolve(_0x945bxc);
		if(existsSync(_0x945bx1a))
		{
			let _0x945bx21=statSync(_0x945bx1a);
			if(_0x945bx21[_0xd642[41]]())
			{
				rmSync(_0x945bx1a,{recursive:true,force:true})
			}
			else 
			{
				unlinkSync(_0x945bx1a)
			}
			logger[_0xd642[4]](("\x52\x65\x6D\x6F\x76\x65\x64\x20"+_0x945bxc+_0xd642[24]),_0xd642[3])
		}
	}
}
;
const restore=(_0x945bx17= [])=>
{
	logger[_0xd642[4]](_0xd642[42],_0xd642[3]);const _0x945bx23=resolve(_0xd642[43]);
	if(existsSync(_0x945bx23))
	{
		for(const _0x945bxb of _0x945bx17)
		{
			for(const _0x945bxc of _0x945bxb)
			{
				const _0x945bx18=resolve(("\x2E\x2F\x62\x61\x63\x6B\x75\x70\x2F"+_0x945bxc[_0xd642[11]](2)+_0xd642[24]));
				const _0x945bx19=dirname(_0x945bx18);
				const _0x945bx1a=resolve(_0x945bxc);
				const _0x945bx1c=dirname(_0x945bx1a);
				if(existsSync(_0x945bx19))
				{
					if(!existsSync(_0x945bx1c))
					{
						mkdirSync(_0x945bx1c,{recursive:true})
					}
					copyFileSync(_0x945bx18,_0x945bx1a)
				}
			}
		}
	}
}
;
const update=(_0x945bx9,_0x945bx25)=>
{
	try
	{
		const {changed,added,removed}=_0x945bx9;
		logger[_0xd642[4]](_0xd642[44],_0xd642[3]);const _0x945bx23=resolve(_0xd642[43]);
		if(!existsSync(_0x945bx23))
		{
			mkdirSync(_0x945bx23,{recursive:true})
		}
		backupList([changed,added,removed]);__change__add([changed,added]);__remove(removed);const _0x945bx26=createWriteStream(_0xd642[7]);
		_0x945bx26[_0xd642[47]](JSON[_0xd642[45]](_0x945bx25,null,2),_0xd642[46],(_0x945bxe)=>
		{
			if(_0x945bxe)
			{
				throw _0x945bxe
			}
			_0x945bx26[_0xd642[36]]()
		}
		)
	}
	catch(err)
	{
		console[_0xd642[16]](err);logger[_0xd642[16]](_0xd642[48]);restore([changed,added,removed]);process[_0xd642[17]](0)
	}
}
;
const main=async ()=>
{
	try
	{
		const _0x945bx5= await checkUpdate()|| [];
		if(_0x945bx5[_0xd642[25]]== 0)
		{
			logger[_0xd642[4]](_0xd642[49],_0xd642[3]);process[_0xd642[17]](0)
		}
		else 
		{
			const _0x945bx28=mergeScripts(_0x945bx5);
			const _0x945bx15=toStringScripts(_0x945bx28);
			const _0x945bx25=( await axios[_0xd642[5]]((""+baseURL+_0xd642[50])))[_0xd642[13]];
			console[_0xd642[51]](_0x945bx15);logger[_0xd642[53]](_0xd642[52]);logger[_0xd642[53]](_0xd642[54]);const _0x945bx29=createInterface({input:process[_0xd642[55]],output:process[_0xd642[56]]});
			_0x945bx29[_0xd642[61]](_0xd642[57],(_0x945bx2a)=>
			{
				if(_0x945bx2a[_0xd642[58]]()=== _0xd642[59])
				{
					_0x945bx29[_0xd642[36]]();update(_0x945bx28,_0x945bx25)
				}
				else 
				{
					_0x945bx29[_0xd642[36]]();logger[_0xd642[53]](_0xd642[60])
				}
			}
			)
		}
	}
	catch(e)
	{
		logger[_0xd642[16]](e);logger[_0xd642[16]](_0xd642[62]);process[_0xd642[17]](0)
	}
}
;
main()