import { NextResponse } from "next/server";
import { generatePitchReport } from "@/lib/ai/pitchReport";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pitch, personaResponses } = body;

    if (!pitch || !personaResponses || !Array.isArray(personaResponses)) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const report = await generatePitchReport(pitch, personaResponses);

    return NextResponse.json(report);
  } catch (error: any) {
    console.error("Report API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
