import { ErrorRequestHandler } from "express";
import conn from "../connection";
import bcrypt from "bcrypt";
import { QueryResult } from "pg";

class UserModel {
    private _rounds: number = 10;

    public setRounds(rounds: number): void {
        this._rounds = rounds;
    }

    public async hashPassword(password: string): Promise<string | false> {
        try {
            return await bcrypt.hash(password, this._rounds);
        } catch(err) {
            return false;
        }
    }

    public async alreadyExists(email: string): Promise<boolean> {

        const query: string = "SELECT 1 FROM `users` WHERE `email` = $1";
        const data: any[] = [email];

        const result: QueryResult<any> = await conn.query(query, data);
        const count = result.rowCount as number;

        return count > 0;
    }
}