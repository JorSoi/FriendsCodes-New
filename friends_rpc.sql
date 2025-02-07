
--Working Version
DROP FUNCTION get_friends_with_codes(uuid);

CREATE OR REPLACE FUNCTION get_friends_with_codes(current_user_id UUID)
RETURNS TABLE (
  created_at TIMESTAMPTZ, -- From friends table
  profile JSONB,
  user_codes JSONB
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    f.created_at,  
    to_jsonb(p) AS profile, -- Select all profile columns dynamically
    COALESCE(
      jsonb_agg(
        to_jsonb(uc) || jsonb_build_object(
          'companies', to_jsonb(c) -- Nest full company data inside user_code object
        )
      ) FILTER (WHERE uc.id IS NOT NULL), '[]'::jsonb
    ) AS user_codes
  FROM friends f
  JOIN profiles p ON f.friend_id = p.id
  LEFT JOIN user_codes uc ON uc.user_id = p.id
  LEFT JOIN companies c ON uc.company_id = c.id
  WHERE f.user_id = current_user_id
  GROUP BY f.created_at, p.id;
END;
$$ LANGUAGE plpgsql;