import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, company, location, type } = body;

    if (!title || !company || !location || !type) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    const db = await connectToDatabase();

    const result = await db.collection('jobs').insertOne({
      title,
      company,
      location,
      type,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error('POST /api/jobs error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
