import { NextResponse } from "next/server";
import { getPersonaResponse } from "@/lib/ai/heckle";
import { PERSONAS } from "@/lib/personas";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pitch, personaKey, brutality } = body;

    if (!pitch || !personaKey || !(personaKey in PERSONAS)) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const result = await getPersonaResponse(personaKey as keyof typeof PERSONAS, pitch, brutality || "Professional");

    return NextResponse.json(result);
  } catch (error: any) {
    console.error(`Persona API Error:`, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
