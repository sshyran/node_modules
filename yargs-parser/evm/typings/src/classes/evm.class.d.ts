/// <reference types="node" />
import Opcode from '../interfaces/opcode.interface';
import Stack from './stack.class';
import Memory from '../interfaces/memory.interface';
import Storage from '../interfaces/storage.interface';
import Jumps from '../interfaces/jumps.interface';
declare class EVM {
    pc: number;
    stack: Stack;
    memory: Memory;
    opcodes: Opcode[];
    instructions: any;
    storage: Storage;
    jumps: Jumps;
    code: Buffer;
    mappings: any;
    layer: number;
    halted: boolean;
    functions: any;
    variables: any;
    events: any;
    gasUsed: number;
    constructor(code: string | Buffer);
    clone(): EVM;
    getBytecode(): string;
    getOpcodes(): Opcode[];
    getFunctions(): string[];
    getEvents(): string[];
    getJumpDestinations(): number[];
    getTotalGas(): number;
    getSwarmHash(): string | boolean;
    reset(): void;
    parse(): any[];
    decompile(): string;
}
export default EVM;
